import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import Image from 'next/image';
import shadow from '../assets/images/bg-shadow.svg'; 

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="hidden md:flex flex-1">
        <div className="fixed h-full mr-4">
          <Sidebar />
        </div>
        <div className="flex-1 p-4 z-10 mb-[82px] ml-72">
        <Header />
          {children}
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center absolute inset-0 bg-gray-800 bg-opacity-75 z-20">
        <span className="text-white text-2xl font-bold">Only available on desktop</span>
      </div>
      <div className="absolute inset-x-0 top-0 h-[100vh] translate-y-[350px] z-0 overflow-hidden md:block">
        <Image src={shadow} alt="bg-shadow" layout="fill" objectFit="cover" />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;