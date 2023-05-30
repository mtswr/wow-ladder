import createAccessToken from './auth';
import Image from 'next/image';
import Table from './components/Table';
import Link from 'next/link';

interface Entry {
  rating: number;
  character: {
    name: string;
    realm: {
      slug: string;
    };
  };
  faction: {
    type: string;
  };
  season_match_statistics: {
    won: number;
    lost: number;
  };
}

interface TableRow {
  rating: number;
  player: string;
  faction: string;
  realm: string;
  wins: number;
  losses: number;
}

async function getLadderData(): Promise<TableRow[]> {
  const auth = await createAccessToken();
  const response = await fetch('https://us.api.blizzard.com/data/wow/pvp-season/35/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=' + auth.access_token, {
    cache: 'no-store'
  });
  const data = await response.json();
  const filteredData = data.entries
    .filter((entry: Entry) => {
      const realms = ['azralon', 'gallywix', 'goldrinn', 'nemesis', 'tol-barad'];
      return realms.includes(entry.character.realm.slug);
    })
    .slice(0, 50);
  const mappedData = filteredData.map((entry: Entry) => ({
    rating: entry.rating,
    player: entry.character.name,
    faction: entry.faction.type,
    realm: entry.character.realm.slug,
    wins: entry.season_match_statistics.won,
    losses: entry.season_match_statistics.lost
  }));
  return mappedData;
}

export default async function Home() {
  const data = await getLadderData();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="flex items-center justify-center mb-8 space-x-4">
        <Image
          src="/wow-logo.png"
          alt="Logo"
          className="w-10"
          width={64}
          height={64}
        />
        <Image
          src="/brasil-logo.png"
          alt="Logo"
          className="w-12"
          width={100}
          height={64}
        />
      </div>
      <span className='text-zinc-200'>Ranking dos jogadores dos servidores do Brasil em busca da glória nas arenas 3v3.</span>
      <span className='text-zinc-200 mb-8'>Feito com <Link href='https://nextjs.org/' className='text-zinc-100 underline'>Next.js</Link> e a
        <Link href='https://develop.battle.net/' className='text-zinc-100 underline'> API da Blizzard</Link>.
      </span>
      <div className="max-w-screen-md mx-auto">
        <Table data={data} />
      </div>
    </main>
  );
}
