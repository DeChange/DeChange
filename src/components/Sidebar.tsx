import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Image from 'next/image';

import book from '../assets/icons/book.svg';
import users from '../assets/icons/users.svg';
import photo from '../assets/icons/photos.svg';
import coin from '../assets/icons/coin.svg';
import user from '../assets/icons/user.svg';

const sidebarItems = [
  { icon: book, label: 'Classroom' },
  { icon: users, label: 'Community' },
  { icon: photo, label: 'Marketplace' },
  { icon: coin, label: 'Reward' },
  { icon: user, label: 'Profile' },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <nav className="bg-gray-900 border-[#7B51EA2E] text-white w-64 h-96 rounded-2xl shadow-inner backdrop-blur-3xl m-6">
      <header className="pl-4 pr-20 py-3 border-b border-[#7b50ea]/25 flex items-center">
        <div className="flex items-center gap-3.5">
          <Image src={logo} alt="DeChange Logo" width={44} height={44} />
          <h1 className="text-center text-primary-400 text-2xl font-bold">DeChange</h1>
        </div>
      </header>

      <ul className="space-y-2 p-4 border-t border-[#7b50ea]/25 pt-3 mt-10">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
              activeItem === index
                ? 'bg-gradient-to-r from-gray-900 to-[#452D84] text-primary-400 shadow-inner border-[#7B51EA2E] '
                : 'hover:bg-gradient-to-r from-gray-900 to-[#452D84] text-gray-600'
            }`}
            onClick={() => setActiveItem(index)}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={28}
              height={28}
              className={`mr-2 ${activeItem === index ? 'text-purple-400' : 'text-gray-600'}`}
            />
            <span className="font-medium text-lg">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;