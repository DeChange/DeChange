import React from 'react'
import Image from 'next/image'

import check from '../../../assets/icons/check.svg'
import padlock from '../../../assets/icons/padlock.svg'

interface Section {
  title: string
  icon: string
  completed: boolean
}

const CourseOutlinePanel: React.FC<{
  sections: Section[]
  currentSection: number
  isClaimRewardEnabled: boolean
  onClaimReward: () => void
  rewardsClaimed: boolean
}> = ({
  sections = [],
  currentSection,
  isClaimRewardEnabled,
  onClaimReward,
  rewardsClaimed,
}) => {
  const safeSections = Array.isArray(sections) ? sections : []

  return (
    <div className="flex flex-col mt-6 justify-start items-start w-[252px] h-[372px] relative overflow-hidden rounded-3xl bg-white/[0.02] backdrop-blur-xl">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#171a20]">
        <p className="flex-grow w-[220px] text-xl font-semibold text-left text-white">
          Course Outline
        </p>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2 border-t-0 border-r-0 border-b border-l-0 border-[#171a20]">
        {safeSections.map((section, index) => (
          <div
            key={index}
            className={`flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5 ${
              index === currentSection ? 'rounded-lg bg-[#7b51ea]/[0.18]' : ''
            }`}
          >
            <Image
              src={section.icon}
              alt="User"
              className="flex-grow-0 flex-shrink-0"
              width={18}
              height={18}
            />
            <p
              className={`flex-grow w-[152px] text-base text-left ${
                section.completed ? 'text-[#a8a7a8]' : 'text-white'
              }`}
            >
              {section.title}
            </p>
            {section.completed ? (
              <Image
                src={check}
                alt="Completed"
                className="flex-grow-0 flex-shrink-0"
                width={16}
                height={16}
              />
            ) : (
              <Image
                src={padlock}
                alt="Locked"
                className="flex-grow-0 flex-shrink-0"
                width={16}
                height={16}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-4 border-t border-r-0 border-b-0 border-l-0 border-[#171a20]">
        <button
          className={`flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-11 overflow-hidden px-4 py-2 rounded-lg ${
            isClaimRewardEnabled && !rewardsClaimed
              ? 'bg-[#7b51ea] text-white'
              : 'bg-[#7b51ea]/25'
          }`}
          onClick={
            isClaimRewardEnabled && !rewardsClaimed ? onClaimReward : undefined
          }
        >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left">
              {rewardsClaimed ? 'Rewards Claimed' : 'Claim Rewards'}
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default CourseOutlinePanel
