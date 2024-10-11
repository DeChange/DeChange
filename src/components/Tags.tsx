import React, { useState } from 'react';

const tags = ['All', 'DeFi', 'Futures', 'Degen', 'Jobs', 'Marketing', 'Airdrops', 'Smart Contract', 'Development'];

const Tags: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState(tags[0]);

  return (
    <div className="flex space-x-2 mt-4">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`font-semibold px-3 py-1 rounded-lg ${
            selectedTag === tag
              ? 'bg-[#5727d5]/20 text-primary-400' 
              : 'text-gray-600 bg-transparent'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;