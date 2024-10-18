import React from 'react'
import Image from 'next/image'

import book from '../../../assets/icons/stud-book.svg'
import monitor from '../../../assets/icons/monitor.svg'
import play from '../../../assets/icons/play.svg'
import question from '../../../assets/icons/question-mark.svg'
import check from '../../../assets/icons/check.svg'
import padlock from '../../../assets/icons/padlock.svg'

const CourseOutlinePanel: React.FC<{
  completedSections: boolean[]
  currentSection: number
  isClaimRewardEnabled: boolean
  onClaimReward: () => void
  rewardsClaimed: boolean
}> = ({
  completedSections = [],
  currentSection,
  isClaimRewardEnabled,
  onClaimReward,
  rewardsClaimed,
}) => {
  const sections = [
    { title: 'What is DeFi?', icon: book, completed: completedSections[0] },
    {
      title: 'History of DeFi',
      icon: monitor,
      completed: completedSections[1],
    },
    { title: 'DeFi Use Case', icon: book, completed: completedSections[2] },
    { title: 'Practice', icon: play, completed: completedSections[3] },
    { title: 'Quiz', icon: question, completed: completedSections[4] },
  ]

  return (
    <div className="flex flex-col mt-6 justify-start items-start w-[252px] h-[372px] relative overflow-hidden rounded-3xl bg-white/[0.02] backdrop-blur-xl">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#171a20]">
        <p className="flex-grow w-[220px] text-xl font-semibold text-left text-white">
          Course Outline
        </p>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2 border-t-0 border-r-0 border-b border-l-0 border-[#171a20]">
        {sections.map((section, index) => (
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
              />
            ) : (
              <Image
                src={padlock}
                alt="Locked"
                className="flex-grow-0 flex-shrink-0"
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
