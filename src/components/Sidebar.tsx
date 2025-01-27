'use client';
import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

import book from '../assets/icons/book.svg';
import users from '../assets/icons/users.svg';
import photo from '../assets/icons/photos.svg';
import coin from '../assets/icons/coin.svg';
import user from '../assets/icons/user.svg';
import { RiMenuUnfold3Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const sidebarItems = [
  { icon: book, label: 'Classroom', path: '/' },
  { icon: users, label: 'Community', path: '/community' },
  { icon: photo, label: 'Marketplace', path: '/marketplace' },
  { icon: coin, label: 'Reward', path: '/reward' },
  { icon: user, label: 'Profile', path: '/profile' },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile View */}
      <button
        className='md:hidden fixed z-40 top-4 left-4 text-2xl  text-white p-3 rounded-full shadow-lg'
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <IoMdClose className='ml-44' />
        ) : (
          <RiMenuUnfold3Line />
        )}
      </button>

      {/* Sidebar Component */}
      <nav
        className={`fixed z-30 bg-gradient-to-br from-[#5319ED00] to-[#5119ed2c] backdrop-blur-md border border-[#7B51EA2E] text-white w-[80%] max-w-64 md:min-w-52 shadow-shiny rounded-2xl  transition-transform duration-300 transform 
        ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <Link href='/'>
          <header className='flex items-center gap-3.5 p-4 border-b border-[#7b50ea]/25'>
            <Image src={logo} alt='DeChange Logo' width={44} height={44} />
            <h1 className='text-primary-400 text-2xl font-bold'>DeChange</h1>
          </header>
        </Link>

        <ul className='space-y-2 p-4 border-t border-[#7b50ea]/25'>
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                activeItem === index
                  ? 'bg-gradient-to-r from-gray-900 to-[#452D84] text-primary-400 shadow-inner border-[#7B51EA2E]'
                  : 'hover:bg-gradient-to-r from-gray-900 to-[#452D84] text-gray-600'
              }`}
              onClick={() => setActiveItem(index)}
            >
              <Link
                href={item.path}
                className='flex items-center w-full'
                onClick={toggleSidebar}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`mr-2 ${
                    activeItem === index ? 'text-purple-400' : 'text-gray-600'
                  }`}
                />
                <span className='font-medium text-lg'>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for Mobile View */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
