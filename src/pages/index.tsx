import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import Tags from '../components/Tags'
import Image from 'next/image'

import shadow from '../assets/images/bg-shadow.svg'

const courses = [
  {
    title: 'Introduction to DeFi',
    level: 'Beginner',
    slug: 'introduction-to-defi',
    category: 'DeFi',
  },
  {
    title: 'NFT and DAOs',
    level: 'Advanced',
    slug: 'nft-and-daos',
    category: 'Futures',
  },
  {
    title: 'What is Web3',
    level: 'Beginner',
    slug: 'what-is-web3',
    category: 'DeFi',
  },
  {
    title: 'ZK Proofs',
    level: 'Advanced',
    slug: 'zk-proofs',
    category: 'Smart Contract',
  },
]

const top = [
  {
    title: 'What is Web3',
    level: 'Beginner',
    slug: 'what-is-web3',
    category: 'DeFi',
  },
  {
    title: 'Introduction to DeFi',
    level: 'Beginner',
    slug: 'introduction-to-defi',
    category: 'DeFi',
  },
  {
    title: 'ZK Proofs',
    level: 'Advanced',
    slug: 'zk-proofs',
    category: 'Smart Contract',
  },
  {
    title: 'NFT and DAOs',
    level: 'Advanced',
    slug: 'nft-and-daos',
    category: 'Futures',
  },
]

const Home: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredCourses =
    selectedTag === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedTag)

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="hidden md:flex flex-1">
        <div className="fixed h-full mr-4">
          <Sidebar />
        </div>
        <div className="flex-1 p-4 z-10 mb-[82px] ml-72">
          <Header />
          <Tags onSelect={setSelectedTag} />

          {/* All Courses Section */}
          <div className="grid grid-cols-4 gap-2 mt-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.slug}
                  title={course.title}
                  level={course.level}
                  slug={course.slug}
                  category={course.category}
                />
              ))
            ) : (
              <div className="col-span-4 text-center text-gray-500">
                No courses in this category.
              </div>
            )}
          </div>

          {selectedTag === 'All' && (
            <>
              <div className="h-7 justify-start items-center mt-9 gap-2 inline-flex">
                <div className="text-white text-2xl font-semibold">
                  Top Picks
                </div>
                <div className="w-1 h-1 bg-[#d9d9d9] rounded-full" />
                <div className="text-gray-600 text-base font-normal">
                  Courses taken by new users
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {top.map((course) => (
                  <CourseCard
                    key={course.slug}
                    title={course.title}
                    level={course.level}
                    slug={course.slug}
                    category={course.category}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center absolute inset-0 bg-gray-800 bg-opacity-75 z-20">
        <span className="text-white text-2xl font-bold">
          Only available on desktop
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 h-[100vh] translate-y-[350px] z-0 overflow-hidden md:block">
        <Image src={shadow} alt="bg-shadow" layout="fill" objectFit="cover" />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  )
}

export default Home
