import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import Image from 'next/image';

import shadow from '../assets/images/bg-shadow.svg';

const courses = [
  {
    title: 'Introduction to DeFi',
    level: 'Beginner',
    slug: 'introduction-to-defi',
    category: 'DeFi',
    details:
      'DeFi, revolutionizes traditional financial systems. This course will guide you through the fundamental concepts of DeFi, its applications, and how to navigate this innovative financial landscape.',
  },
  {
    title: 'NFT and DAOs',
    level: 'Advanced',
    slug: 'nft-and-daos',
    category: 'Futures',
    details:
      'NFTs, are unique digital assets that represent ownership of specific items or content. This course will explore the principles of NFTs, their use cases, and how they empower creators.',
  },
  {
    title: 'What is Web3',
    level: 'Beginner',
    slug: 'what-is-web3',
    category: 'DeFi',
    details:
      'Web3 represents the next generation of the internet, focusing on decentralization and user ownership. This course will introduce you to the core concepts of Web3 and its impact on the digital landscape.',
  },
  {
    title: 'ZK Proofs',
    level: 'Advanced',
    slug: 'zk-proofs',
    category: 'Smart Contract',
    details:
      'Zero-Knowledge Proofs (ZK Proofs) are cryptographic methods that allow one party to prove knowledge of a fact without revealing the fact itself. This course will delve into the principles and applications of ZK Proofs in blockchain technology.',
  },
];

const topCourses = courses.filter((course, index) => index < 4);

const Home: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredCourses =
    selectedTag === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedTag);

  return (
    <div className='bg-gradient-to-b from-[#060709] to-[#5319ED12] via-transparent bg-no-repeat bg-center min-h-screen  flex flex-col'>
      <Sidebar />
      <Header />
      <main className='flex flex-col relative overflow-hidden md:pl-72 pb-10'>
        <Tags onSelect={setSelectedTag} />
        <div className='p-4 h-full mt-48 md:mt-44'>
          <section className='mb-8'>
            <h2 className='text-xl text-white font-semibold mb-4'>Courses</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <CourseCard key={course.slug} {...course} />
                ))
              ) : (
                <p className='col-span-full text-center text-gray-500'>
                  No courses in this category.
                </p>
              )}
            </div>
          </section>

          {selectedTag === 'All' && (
            <section className='mt-8'>
              <h2 className='text-xl text-white font-semibold mb-4'>
                Top Picks
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {topCourses.map((course) => (
                  <CourseCard key={course.slug} {...course} />
                ))}
              </div>
            </section>
          )}
        </div>

        <Image
          src={shadow}
          alt='Background shadow'
          layout='fill'
          objectFit='cover'
          className='pointer-events-none z-[-1] opacity-20'
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
