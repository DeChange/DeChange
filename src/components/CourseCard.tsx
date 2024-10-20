import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import preview from '../assets/images/preview-image.png';
import usdt from '../assets/icons/usdt-badge.svg';
import role from '../assets/icons/role-badge.svg';
import dechange from '../assets/icons/dechange-badge.svg';

interface CourseCardProps {
  title: string;
  level: string;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, level, slug }) => {
  return (
    <Link href={`/course/${slug}`}>
      <div className="h-[301px] bg-white/5 rounded-3xl shadow-inner border border-[#7B51EA2E] backdrop-blur-lg p-3 flex flex-col gap-3 cursor-pointer">
        <div className="relative h-36 rounded-xl">
          <Image src={preview} alt="DeChange Logo" width={308} height={143} className="rounded-2xl" />
          <div className="absolute right-2 top-2 bg-[#fcd9d7] rounded px-2 py-0.5 flex items-center">
            <p className="text-[#f04438] text-xs font-normal">{level}</p>
          </div>
          <div className="absolute w-28 h-36 left-16 top-24 bg-[#7B51EA2E] rounded-full blur-3xl" />
        </div>
        <div className="text-white text-2xl font-medium">{title}</div>
        <div className="text-[#d2d1d1] text-base font-normal">Course Details</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-[#d2d1d1] text-xs font-normal">Testnet</p>
            <div className="w-1 h-1 bg-[#d2d1d1] rounded-full" />
            <p className="text-[#d2d1d1] text-xs font-normal">Mainnet</p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-start gap-2">
              <Image src={dechange} alt="usdt" width={16} height={16} />
              <div className="text-white text-xs font-normal">100</div>
            </div>
            <div className="flex items-start gap-2">
              <Image src={usdt} alt="usdt" width={16} height={16} />
              <div className="text-white text-xs font-normal">$100</div>
            </div>
            <div className="flex items-start gap-2">
              <Image src={role} alt="usdt" width={16} height={16} />
              <div className="text-white text-xs font-normal">Role</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;