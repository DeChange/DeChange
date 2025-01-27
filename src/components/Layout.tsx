import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import Image from 'next/image';
import shadow from '../assets/images/bg-shadow.svg';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-col pb-24 h-auto  top-0 w-full'>
      <div className=''>
        <Sidebar />

        <Header />
        {children}
      </div>

      <div className='absolute inset-x-0 top-0 h-[100vh] z-0 overflow-hidden md:block'>
        <Image src={shadow} alt='bg-shadow' layout='fill' objectFit='cover' />
      </div>
      <div className='hidden md:block'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
