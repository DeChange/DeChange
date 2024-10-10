import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import Tags from '../components/Tags';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <Header />
          <Tags/>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <CourseCard title="Introduction to DeFi" level="Beginner" />
            <CourseCard title="Advanced Course" level="Advanced" />
            <CourseCard title="Course title" level="Beginner" />
            <CourseCard title="Course title" level="Advanced" />
          </div>
          <h2 className="text-xl font-bold mt-8">Top Picks • Courses taken by new users</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <CourseCard title="Course title" level="Beginner" />
            <CourseCard title="Introduction to DeFi" level="Beginner" />
            <CourseCard title="Course title" level="Advanced" />
            <CourseCard title="Course title" level="Beginner" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;