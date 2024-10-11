import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import Image from 'next/image';

import shadow from '../assets/images/bg-shadow.svg'; 

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex flex-1">
        <div className="fixed h-full mr-4">
          <Sidebar />
        </div>
        <div className="flex-1 p-4 z-10 mb-[82px] ml-72">
          <Header />
          <Tags />
          <div className="grid grid-cols-4 gap-2 mt-8">
            <CourseCard title="Introduction to DeFi" level="Beginner" />
            <CourseCard title="Advanced Course" level="Advanced" />
            <CourseCard title="Course title" level="Beginner" />
            <CourseCard title="Course title" level="Advanced" />
          </div>
          <div className="h-7 justify-start items-center mt-9 gap-2 inline-flex">
            <div className="text-white text-2xl font-semibold">Top Picks</div>
            <div className="w-1 h-1 bg-[#d9d9d9] rounded-full" />
            <div className="text-gray-600 text-base font-normal">Courses taken by new users</div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            <CourseCard title="Course title" level="Beginner" />
            <CourseCard title="Introduction to DeFi" level="Beginner" />
            <CourseCard title="Course title" level="Advanced" />
            <CourseCard title="Course title" level="Beginner" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-[100vh] translate-y-[350px] z-0 overflow-hidden">
        <Image src={shadow} alt="bg-shadow" layout="fill" objectFit="cover" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;