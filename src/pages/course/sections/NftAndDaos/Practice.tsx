import Image from 'next/image'
import React from 'react'
import { useAppContext } from '../../../../context/AppContext'

import arrowRight from '../../../../assets/icons/arrow-side.svg'
import verify from '../../../../assets/icons/verification-badge.svg'

const Practice: React.FC = () => {
  const { courses, setCompletedQuests } = useAppContext()
  const courseState = courses['nft-and-daos']
  const { completedQuests } = courseState

  const handleQuestCompletion = (quest: keyof typeof completedQuests) => {
    let url = ''

    switch (quest) {
      case 'createNFT':
        url = 'https://www.opensea.io/'
        break
      case 'mintNFT':
        url = 'https://www.niftygateway.com/'
        break
      case 'understandDAOs':
        url = 'https://www.daohaus.club/'
        break
      default:
        return
    }

    window.open(url, '_blank')
    setCompletedQuests('nft-and-daos', {
      ...completedQuests,
      [quest]: true,
    })
  }

  return (
    <div className="flex flex-col justify-start items-start w-full gap-8">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[9px]">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-4xl font-semibold text-left text-white">
          NFT and DAO Practice Session
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        {/* Create an NFT */}
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-2xl bg-transparent">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow relative gap-[7px]">
              <Image
                src={arrowRight}
                alt="Arrow"
                className="flex-grow-0 flex-shrink-0"
              />
              <p className="flex-grow w-full text-xl font-medium text-left text-white">
                Create an NFT on OpenSea
              </p>
            </div>
            {completedQuests.createNFT ? (
              <Image
                src={verify}
                alt="Verified"
                className="flex-grow-0 flex-shrink-0"
              />
            ) : (
              <div
                className="flex cursor-pointer justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden px-3 py-2 rounded-lg bg-[#2a5450]"
                onClick={() => handleQuestCompletion('createNFT')}
              >
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#68d2c8]">
                    Complete Quest
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mint an NFT */}
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-2xl bg-transparent">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow relative gap-[7px]">
              <Image
                src={arrowRight}
                alt="Arrow"
                className="flex-grow-0 flex-shrink-0"
              />
              <p className="flex-grow w-full text-xl font-medium text-left text-white">
                Mint an NFT on Nifty Gateway
              </p>
            </div>
            {completedQuests.mintNFT ? (
              <Image
                src={verify}
                alt="Verified"
                className="flex-grow-0 flex-shrink-0"
              />
            ) : (
              <div
                className="flex cursor-pointer justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden px-3 py-2 rounded-lg bg-[#2a5450]"
                onClick={() => handleQuestCompletion('mintNFT')}
              >
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#68d2c8]">
                    Complete Quest
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Understand DAOs */}
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-2xl bg-transparent">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow relative gap-[7px]">
              <Image
                src={arrowRight}
                alt="Arrow"
                className="flex-grow-0 flex-shrink-0"
              />
              <p className="flex-grow w-full text-xl font-medium text-left text-white">
                Understand DAOs on DAOhaus
              </p>
            </div>
            {completedQuests.understandDAOs ? (
              <Image
                src={verify}
                alt="Verified"
                className="flex-grow-0 flex-shrink-0"
              />
            ) : (
              <div
                className="flex cursor-pointer justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden px-3 py-2 rounded-lg bg-[#2a5450]"
                onClick={() => handleQuestCompletion('understandDAOs')}
              >
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#68d2c8]">
                    Complete Quest
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice
