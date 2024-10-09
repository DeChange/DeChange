import React from 'react';

interface CourseCardProps {
  title: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, level }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{level}</p>
      <button className="mt-2 bg-purple-600 px-3 py-1 rounded">Course Details</button>
    </div>
  );
};

export default CourseCard;