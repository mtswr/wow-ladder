'use client';

interface TableProps {
  data: TableRow[];
}

interface TableRow {
  rating: number;
  player: string;
  class: string;
  faction: string;
  realm: string;
  wins: number;
  losses: number;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-[#1464d2]"> 
          <tr>
            <th scope="col" className="px-6 py-3">
              Rank
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 py-3">
              Jogador
            </th>
            <th scope="col" className="px-6 py-3">
              Facção
            </th>
            <th scope="col" className="px-6 py-3">
              Reino
            </th>
            <th scope="col" className="px-1 py-3">
              Vitórias
            </th>
            <th scope="col" className="px-1 py-3">
              Derrotas
            </th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-[#171e22]' : 'bg-[#232930]'
              } border-b dark:border-gray-700 hover:bg-gray-600`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4 text-zinc-200">{item.rating}</td>
              <td className="px-6 py-4 text-zinc-200">{item.player}</td>
              <td className="px-6 py-4 text-zinc-200">{item.faction}</td>
              <td className="px-6 py-4 text-zinc-200">{item.realm}</td>
              <td className="px-6 py-4 text-green-500">{item.wins}</td>
              <td className="px-6 py-4 text-red-500">{item.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;