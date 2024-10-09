import React from 'react';

const tags = ['All', 'DeFi', 'Futures', 'Degen', 'Jobs', 'Marketing', 'Airdrops', 'Smart Contract', 'Development'];

const Tags: React.FC = () => {
  return (
    <div className="flex space-x-2 mt-4">
      {tags.map((tag) => (
        <button key={tag} className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-purple-600">
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;