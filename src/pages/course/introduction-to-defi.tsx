import React, { useState } from 'react'
import Layout from '../../components/Layout'
import CourseOutlinePanel from './components/CourseOutlinePanel'
import Popup from './components/Popup'
import Image from 'next/image'
import Confetti from 'react-confetti'

import preview from '../../assets/images/preview-image.png'
import demoUser1 from '../../assets/images/demo-user1.svg'
import demoUser2 from '../../assets/images/demo-user2.svg'
import demoUser3 from '../../assets/images/demo-user3.svg'
import demoUser4 from '../../assets/images/demo-user4.svg'
import demoUser5 from '../../assets/images/demo-user5.svg'

import dechangeBadge from '../../assets/icons/dechange-badge.svg'
import usdtBadge from '../../assets/icons/usdt-badge.svg'
import roleBadge from '../../assets/icons/role-badge.svg'
import certBadge from '../../assets/icons/cert-badge.svg'
import defaultAvatar from '../../assets/images/default-avatar.svg'
import WhatIsDeFi from './sections/IntroductionToDefi/WhatIsDefi'
import HistoryOfDeFi from './sections/IntroductionToDefi/HistoryOfDefi'
import DefiUsecase from './sections/IntroductionToDefi/DefiUsecase'
import Practice from './sections/IntroductionToDefi/Practice'
import Quiz from './sections/IntroductionToDefi/Quiz'

const IntroductionToDeFi: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<boolean[]>(
    Array(5).fill(false),
  )
  const [isClaimRewardEnabled, setIsClaimRewardEnabled] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [allAnswersCorrect, setAllAnswersCorrect] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [rewardsClaimed, setRewardsClaimed] = useState(false)

  const sections = [
    <WhatIsDeFi key="WhatIsDeFi" />,
    <HistoryOfDeFi key="HistoryOfDeFi" />,
    <DefiUsecase key="DefiUsecase" />,
    <Practice key="Practice" />,
    <Quiz key="Quiz" onAnswersChecked={setAllAnswersCorrect} />,
  ]

  const handleNext = () => {
    if (currentSection < completedSections.length - 1) {
      setCompletedSections((prev) => {
        const newCompleted = [...prev]
        newCompleted[currentSection] = true
        return newCompleted
      })
      setCurrentSection((prev) => prev + 1)
    } else {
      // Last section (Quiz) submission logic
      if (allAnswersCorrect) {
        setShowConfetti(true)
        setTimeout(() => {
          setShowConfetti(false)
        }, 7000)
      }
      // Last section (Quiz) submission logic
      console.log('Submitting the quiz...') // Temporary submission logic
      setCompletedSections((prev) => {
        const newCompleted = [...prev]
        newCompleted[currentSection] = true
        return newCompleted
      })
      setIsClaimRewardEnabled(true)
      setShowPopup(true)
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1)
    }
  }

  const handleClaimReward = () => {
    setShowConfetti(true)
    setShowPopup(true)
    setRewardsClaimed(true)
    // Claim reward logic goes here
    setTimeout(() => {
      setShowConfetti(false)
    }, 7000)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <Layout>
      {showConfetti && <Confetti />}
      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-6 max-w-full overflow-hidden">
          <div className="w-full h-[223px] mt-6 p-4 bg-white/5 rounded-3xl shadow-inner border border-[#7B51EA2E] backdrop-blur-lg flex">
            <Image
              src={preview}
              alt="DeChange Logo"
              width={308}
              height={191}
              className="rounded-[12px] h-full object-cover"
            />
            <div className="flex-grow h-full flex flex-col justify-between pl-4">
              <div className="text-white text-2xl font-medium font-['Figtree']">
                Introduction to Defi
              </div>
              <div className="h-14 text-[#a8a7a7] mb-2 text-xs font-normal font-['Figtree']">
                DeFi, or Decentralized Finance, revolutionizes traditional
                financial This course will guide you through the fundamental
                concepts of DeFi, its applications, and how to navigate this
                innovative financial landscape.
              </div>
              <div className="flex justify-start items-center gap-5">
                <div className="flex items-center gap-3">
                  <div className="text-white text-xs font-normal font-['Figtree']">
                    Difficulty:
                  </div>
                  <div className="px-2 py-0.5 bg-[#ded3f9] rounded flex items-center">
                    <div className="text-[#361689] text-xs font-normal font-['Figtree']">
                      Beginner
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-white text-xs font-normal font-['Figtree']">
                    Category:
                  </div>
                  <div className="px-2 py-0.5 bg-[#ded3f9] rounded flex items-center">
                    <div className="text-[#361689] text-xs font-normal font-['Figtree']">
                      Defi & Blockchain
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3.5">
                <div className="flex items-center gap-1.5">
                  <Image
                    src={dechangeBadge}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                    width={22}
                    height={22}
                  />
                  <div className="text-white/60 text-xs font-normal font-['Figtree']">
                    100
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image
                    src={usdtBadge}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                    width={22}
                    height={22}
                  />
                  <div className="text-white/60 text-xs font-normal font-['Figtree']">
                    $100
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image
                    src={roleBadge}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                    width={22}
                    height={22}
                  />
                  <div className="text-white/60 text-xs font-normal font-['Figtree']">
                    Role
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image
                    src={certBadge}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                    width={22}
                    height={22}
                  />
                  <div className="text-white/60 text-xs font-normal font-['Figtree']">
                    Certificate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="mt-14 mb-28 w-full flex-col justify-start items-start gap-8 inline-flex">
            {sections[currentSection]}
            <div className="flex mt-14 justify-between items-start self-stretch flex-grow-0 flex-shrink-0 py-4">
              <div className="flex flex-col justify-center items-start flex-grow gap-2">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative overflow-hidden px-4 py-2 rounded-lg"
                  style={{
                    filter:
                      'drop-shadow(0px 0px 0px rgba(123,81,234,0.19)) drop-shadow(0px 0px 0px rgba(123,81,234,0.25))',
                  }}
                >
                  {currentSection === 0 ? null : (
                    <>
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M11.25 13.5L6.75 9L11.25 4.5"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <button
                        onClick={handlePrevious}
                        disabled={currentSection === 0}
                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2"
                      >
                        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                          Previous
                        </p>
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center items-end flex-grow gap-2">
                <div
                  className="flex justify-center items-center flex-grow-0 bg-[#7b51ea]
                  flex-shrink-0 h-11 relative overflow-hidden px-4 py-2 rounded-lg"
                  style={{
                    boxShadow:
                      '0px 0px 0px 0 rgba(123,81,234,0.19), 0px 0px 0px 0 rgba(123,81,234,0.25)',
                  }}
                >
                  <button
                    onClick={handleNext}
                    disabled={
                      rewardsClaimed ||
                      (currentSection === 4 && !allAnswersCorrect)
                    }
                    className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 ${
                      (currentSection === 4 && !allAnswersCorrect) ||
                      rewardsClaimed
                        ? 'cursor-not-allowed'
                        : ''
                    }`}
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                      {currentSection === 4 ? 'Submit' : 'Next'}
                    </p>
                  </button>
                  <svg
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M7.24316 13.5L11.7432 9L7.24316 4.5"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Participants and Rank Section */}
        <div className="flex-grow h-full flex flex-col justify-between pl-4 gap-8">
          <CourseOutlinePanel
            completedSections={completedSections}
            currentSection={currentSection}
            isClaimRewardEnabled={isClaimRewardEnabled}
            onClaimReward={handleClaimReward}
            rewardsClaimed={rewardsClaimed}
          />
          <div className="flex flex-col justify-start items-start w-[252px] h-[226px] relative overflow-hidden rounded-3xl bg-white/[0.02] backdrop-blur-xl">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#7b51ea]/25">
              <p className="flex-grow w-[220px] text-base font-medium text-left text-white">
                Participants
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-3">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative space-x-[-18px]">
                  <Image
                    src={demoUser1}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                  />
                  <Image
                    src={demoUser2}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                  />
                  <Image
                    src={demoUser3}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                  />
                  <Image
                    src={demoUser4}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                  />
                  <Image
                    src={demoUser5}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                  />
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#d2d1d2]">
                  +200
                </p>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 w-[252px] h-4 relative overflow-hidden" />
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#7b51ea]/25">
              <p className="flex-grow w-[220px] text-base font-medium text-left text-white">
                My rank
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 pt-3 pb-4 border-t border-r-0 border-b-0 border-l-0 border-[#7b51ea]/25">
              <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#d2d1d2]">
                  {'0'}
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <Image
                    src={defaultAvatar}
                    alt="User"
                    className="flex-grow-0 flex-shrink-0"
                  />
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#ededed]">
                    {'10'} xp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Claim Reward */}
      {showPopup && (
        <Popup
          title="Viola, Course completed."
          message="Keep it up!!!"
          subMessage="You earned more D-points"
          onClose={closePopup}
        />
      )}
    </Layout>
  )
}

export default IntroductionToDeFi
