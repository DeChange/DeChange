import React from 'react';
import logo from '../assets/images/logo.svg';
import { FaBook, FaUsers, FaStore, FaCoins, FaUser } from 'react-icons/fa';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white w-64 w-64 h-96 rounded-2xl shadow-inner backdrop-blur-3xl m-6">
      <header className="pl-4 pr-20 py-3 border-b border-[#7b50ea]/25 flex items-center">
        <div className="flex items-center gap-3.5">
          <Image src={logo} alt="DeChange Logo" width={44} height={44} />
          <h1 className="text-center text-[#7b50ea] text-2xl font-bold font-['Figtree']">DeChange</h1>
        </div>
      </header>

      <ul className="space-y-2 p-4">
        <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-purple-400">
          <FaBook className="mr-2" />
          <span>Classroom</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-purple-400">
          <FaUsers className="mr-2" />
          <span>Community</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-purple-400">
          <FaStore className="mr-2" />
          <span>Marketplace</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-purple-400">
          <FaCoins className="mr-2" />
          <span>Reward</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-purple-400">
          <FaUser className="mr-2" />
          <span>Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;