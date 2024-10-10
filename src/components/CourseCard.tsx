// import React from 'react';

// interface CourseCardProps {
//   title: string;
//   level: string;
// }

// const CourseCard: React.FC<CourseCardProps> = ({ title, level }) => {
//   return (
//     <div className="h-72 px-3 pt-3 pb-4 bg-white/5 rounded-3xl shadow-inner border border-[#7b50ea] backdrop-blur-lg flex-col justify-start items-start gap-3.5 inline-flex">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-sm">{level}</p>
//       <button className="mt-2 bg-purple-600 px-3 py-1 rounded">Course Details</button>
//     </div>
//   );
// };

// export default CourseCard;

import React from 'react';

import preview from '../assets/images/preview-image.png';
import Image from 'next/image';


interface CourseCardProps {
  title: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, level }) => {
  return (
    <div className="h-72 px-3 pt-3 pb-4 bg-white/5 rounded-3xl shadow-inner border border-[#7b50ea] backdrop-blur-lg flex-col justify-start items-start gap-3.5 inline-flex">
      <div className="h-36 relative rounded-xl">

        <Image src={preview} alt="DeChange Logo" width={228} height={143} className="rounded-2xl"/>

        <div className="px-2 py-0.5 left-[149px] top-[8px] absolute bg-[#fcd9d7] rounded justify-center items-center gap-2 inline-flex">
          <div className="text-[#f04438] text-xs font-normal font-['Figtree']">{level}</div>
        </div>
        <div className="w-28 h-36 left-[69px] top-[225px] absolute bg-[#7b50ea] rounded-full blur-3xl" />
      </div>
      <div className="self-stretch text-white text-2xl font-medium font-['Figtree']">{title}</div>
      <div className="self-stretch text-[#d2d1d1] text-base font-normal font-['Figtree']">Course Details</div>
      <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-[#d2d1d1] text-xs font-normal font-['Figtree']">Testnet</div>
          <div className="w-1 h-1 bg-[#d2d1d1] rounded-full" />
          <div className="text-[#d2d1d1] text-xs font-normal font-['Figtree']">Mainnet</div>
        </div>
        <div className="justify-start items-start gap-3.5 inline-flex">
          <div className="justify-start items-start gap-2 flex">
            <div className="pl-0.5 pb-0.5 bg-[#7b50ea] rounded-tl-lg rounded-tr-3xl rounded-bl-lg rounded-br-3xl justify-end items-center flex">
              <div className="w-4 h-4 relative bg-[#9c7cef] rounded-tl-md rounded-tr-3xl rounded-bl-md rounded-br-3xl" />
            </div>
            <div className="text-white text-xs font-normal font-['Figtree']">100</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-4 h-4 relative" />
            <div className="text-white text-xs font-normal font-['Figtree']">$100</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-4 h-4 px-1 py-px justify-center items-center flex">
              <div className="w-2 h-3.5 relative">
                <div className="w-2 h-2 left-0 top-0 absolute bg-[#ffa705] rounded-3xl">
                  <div className="w-2 h-2 left-[0.13px] top-[-0.72px] absolute bg-[#ffb42b] rounded-full" />
                </div>
              </div>
            </div>
            <div className="text-white text-xs font-normal font-['Figtree']">Role</div>
          </div>
        </div>
      </div>
      <div className="w-28 h-36 bg-[#7b50ea] rounded-full blur-3xl" />
    </div>
  );
};

export default CourseCard;