import React from 'react';
import HordeIcon from '../assets/horde.png';
import AllianceIcon from '../assets/alliance.png';
import Image from 'next/image';

interface TableProps {
  data: TableRow[];
}

interface TableRow {
  rating: number;
  player: string;
  faction: string;
  realm: string;
  wins: number;
  losses: number;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase border-zinc-600">
          <tr>
            <th scope="col" className="px-4 sm:px-6 py-3">
              Rank
            </th>
            <th scope="col" className="px-4 sm:px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-4 sm:px-6 py-3">
              Jogador
            </th>
            <th scope="col" className="px-4 sm:px-6 py-3">
              Facção
            </th>
            <th scope="col" className="px-4 sm:px-6 py-3">
              Reino
            </th>
            <th scope="col" className="px-1 py-3 sm:px-2">
              V
            </th>
            <th scope="col" className="px-1 py-3 sm:px-2">
              D
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-zinc-600 hover:bg-zinc-800"
            >
              <th
                scope="row"
                className="px-4 sm:px-6 py-4 font-medium text-white whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-4 sm:px-6 py-4 text-zinc-200">{item.rating}</td>
              <td className="px-4 sm:px-6 py-4 text-zinc-200">{item.player}</td>
              <td className="px-4 sm:px-6 py-4 text-zinc-200">
                {item.faction === 'HORDE' ? (
                  <Image src={HordeIcon} alt="Horde Icon" width={32} height={32} />
                ) : (
                  <Image src={AllianceIcon} alt="Alliance Icon" width={32} height={32} />
                )}
              </td>
              <td className="px-4 sm:px-6 py-4 text-zinc-200">{item.realm}</td>
              <td className="px-1 py-4 sm:px-2 text-green-500">{item.wins}</td>
              <td className="px-1 py-4 sm:px-2 text-red-500">{item.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
