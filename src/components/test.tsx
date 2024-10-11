import React from 'react';
import { FaBook, FaUsers, FaStore, FaCoins, FaUser } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <nav className="w-64 h-96 bg-gradient-to-t from-[#5318ed] to-[#5318ed] rounded-2xl shadow-inner backdrop-blur-3xl flex flex-col">
      <header className="pl-4 pr-20 py-3 border-b border-[#7b50ea]/25 flex items-center">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 relative" />
          <h1 className="text-center text-[#7b50ea] text-2xl font-bold font-['Figtree']">DeChange</h1>
        </div>
      </header>

      <ul className="flex flex-col p-3 border-t border-[#7b50ea]/25 gap-2">
        <li className="flex items-center h-11 px-3 py-2 bg-white/5 rounded-lg shadow-inner border border-[#7b50ea]">
          <FaBook className="w-6 h-6" />
          <span className="ml-2 text-[#7b50ea] text-base font-semibold font-['Figtree']">Classroom</span>
        </li>
        <li className="flex items-center h-11 px-3 py-2 rounded-lg">
          <FaUsers className="w-6 h-6" />
          <span className="ml-2 text-[#a8a7a7] text-base font-medium font-['Figtree']">Community</span>
        </li>
        <li className="flex items-center h-11 px-3 py-2 rounded-lg">
          <FaStore className="w-6 h-6" />
          <span className="ml-2 text-[#a8a7a7] text-base font-medium font-['Figtree']">Marketplace</span>
        </li>
        <li className="flex items-center h-11 px-3 py-2 rounded-lg">
          <FaCoins className="w-6 h-6" />
          <span className="ml-2 text-[#a8a7a7] text-base font-medium font-['Figtree']">Reward</span>
        </li>
        <li className="flex items-center h-11 px-3 py-2 rounded-lg">
          <FaUser className="w-6 h-6" />
          <span className="ml-2 text-[#a8a7a7] text-base font-medium font-['Figtree']">Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;