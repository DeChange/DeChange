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
        <Sidebar />
        <div className="flex-1 p-4 z-10 mb-[82px]">
          <Header />
          <Tags />
          <div className="grid grid-cols-4 gap-2 mt-8">
            <CourseCard title="Introduction to DeFi" level="Beginner" />
            <CourseCard title="Advanced Course" level="Advanced" />
            <CourseCard title="Course title" level="Beginner" />
            <CourseCard title="Course title" level="Advanced" />
          </div>
          <h2 className="text-xl font-bold mt-8">Top Picks • Courses taken by new users</h2>
          <div className="grid grid-cols-4 gap-2 mt-4">
            <CourseCard title="Course title" level="Beginner" />
            <CourseCard title="Introduction to DeFi" level="Beginner" />
            <CourseCard title="Course title" level="Advanced" />
            <CourseCard title="Course title" level="Beginner" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-[100vh] translate-y-[340px] z-0 overflow-hidden">
        <Image src={shadow} alt="bg-shadow" layout="fill" objectFit="cover" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;