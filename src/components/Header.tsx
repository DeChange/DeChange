import React from 'react';
import { FaWallet } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 text-white">
      <h1 className="text-xl font-bold">DeChange</h1>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search Topics, project or Narrative"
          className="w-[407px] p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <button className="flex items-center bg-purple-600 px-4 py-2 rounded">
        <FaWallet className="mr-2" />
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;