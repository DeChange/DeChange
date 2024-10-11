import React from 'react';

import preview from '../assets/images/preview-image.png';
import usdt from '../assets/icons/usdt-badge.svg';
import cert from '../assets/icons/cert-badge.svg';
import dechange from '../assets/icons/dechange-badge.svg';

import Image from 'next/image';


interface CourseCardProps {
  title: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, level }) => {
  return (
    <div className="h-[301px] w-full px-3 pt-3 pb-4 bg-white/5 rounded-3xl shadow-inner border border-[#7B51EA2E] backdrop-blur-lg flex-col justify-start items-start gap-3.5 inline-flex">
      <div className="h-36 relative rounded-xl">
        <Image src={preview} alt="DeChange Logo" width={308} height={143} className="rounded-2xl"/>
          <div className="absolute left-[70%] top-[10%] bg-[#fcd9d7] rounded px-2 py-0.5 flex justify-center items-center gap-2">
        <p className="text-[#f04438] text-xs font-normal">{level}</p>
      </div>
        <div className="w-28 h-36 left-[69px] top-[225px] absolute bg-[#7B51EA2E] rounded-full blur-3xl" />
      </div>
      <div className="self-stretch text-white text-2xl font-medium">{title}</div>
      <div className="self-stretch text-[#d2d1d1] text-base font-normal">Course Details</div>
      <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <p className="text-[#d2d1d1] text-xs font-normal">Testnet</p>
          <div className="w-1 h-1 bg-[#d2d1d1] rounded-full" />
          <p className="text-[#d2d1d1] text-xs font-normal">Mainnet</p>
        </div>
        <div className="justify-start items-start gap-3.5 inline-flex">
          <div className="justify-start items-start gap-2 flex">
            <Image src={dechange} alt="usdt" width={16} height={16} />
            <div className="text-white text-xs font-normal">100</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <Image src={usdt} alt="usdt" width={16} height={16} />
            <div className="text-white text-xs font-normal">$100</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <Image src={cert} alt="usdt" width={16} height={16} />
            <div className="text-white text-xs font-normal">Role</div>
          </div>
        </div>
      </div>
      <div className="w-28 h-36 bg-[#7b50ea] rounded-full blur-3xl" />
    </div>
  );
};

export default CourseCard;