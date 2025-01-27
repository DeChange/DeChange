import React, { useState } from 'react';

const tags = [
  'All',
  'DeFi',
  'Futures',
  'Degen',
  'Jobs',
  'Marketing',
  'Airdrops',
  'Smart Contract',
  'Development',
];

const Tags: React.FC<{ onSelect: (tag: string) => void }> = ({ onSelect }) => {
  const [selectedTag, setSelectedTag] = useState(tags[0]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    onSelect(tag);
  };

  return (
    <div className='flex flex-wrap  bg-background z-10  gap-3 fixed top-28 md:pt-8 pb-4 pl-4 md:pr-60 w-full'>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`font-semibold  py-1 rounded-lg ${
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
