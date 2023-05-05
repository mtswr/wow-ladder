
async function getData() {
  const results = await fetch('https://us.api.blizzard.com/data/wow/pvp-season/33/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&', {
    headers: {
      'Authorization': `Bearer ${process.env.BLIZZARD_API_TOKEN}`
    }
  });
  return results.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  if (!data || !data.results) {
    return <div className="items-center justify-center flex min-h-screen">Data not found</div>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(entry => (
          <li key={entry.character.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="font-bold text-lg mb-2">{entry.character.name}</h3>
              <p className="text-gray-700 text-base">Rank: {entry.rank}</p>
              <p className="text-gray-700 text-base">Rating: {entry.rating}</p>
              <p className="text-gray-700 text-base">Played: {entry.season_match_statistics.played}</p>
              <p className="text-gray-700 text-base">Won: {entry.season_match_statistics.won}</p>
              <p className="text-gray-700 text-base">Lost: {entry.season_match_statistics.lost}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

