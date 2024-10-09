import React from 'react';
import { FaBook, FaUsers, FaStore, FaCoins, FaUser } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white w-64 h-full p-4">
      <h2 className="text-lg font-bold mb-4">DeChange</h2>
      <ul className="space-y-2">
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