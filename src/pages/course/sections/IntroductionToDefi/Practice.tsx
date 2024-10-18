import Image from 'next/image'
import React, { useState } from 'react'

import arrowRight from '../../../../assets/icons/arrow-side.svg'
import verify from '../../../../assets/icons/verification-badge.svg'

const Practice: React.FC = () => {
  // State to track completion of each quest
  const [questsCompleted, setQuestsCompleted] = useState({
    claimFaucet: false,
    swapTokens: false,
    bridgeToBase: false,
  })

  const handleQuestCompletion = (quest: keyof typeof questsCompleted) => {
    let url = ''

    switch (quest) {
      case 'claimFaucet':
        url = 'https://faucets.chain.link/'
        break
      case 'swapTokens':
        url = 'https://wallet.coinbase.com/swap'
        break
      case 'bridgeToBase':
        url = 'https://testnets.superbridge.app/base-sepolia'
        break
      default:
        return
    }

    window.open(url, '_blank')
    setQuestsCompleted((prevState) => ({
      ...prevState,
      [quest]: true,
    }))
  }

  return (
    <div className="flex flex-col justify-start items-start w-full gap-8">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[9px]">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-4xl font-semibold text-left text-white">
          Practice / Quest
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        {/* Claim faucet at Alchemy */}
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-2xl bg-transparent">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex  justify-start items-center flex-grow relative gap-[7px]">
              <Image
                src={arrowRight}
                alt="Arrow"
                className="flex-grow-0 flex-shrink-0"
              />
              <p className="flex-grow w-full text-xl font-medium text-left text-white">
                Claim faucet at Chainlink
              </p>
            </div>
            {questsCompleted.claimFaucet ? (
              <Image
                src={verify}
                alt="Verified"
                className="flex-grow-0 flex-shrink-0"
              />
            ) : (
              <div
                className="flex cursor-pointer justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden px-3 py-2 rounded-lg bg-[#2a5450]"
                onClick={() => handleQuestCompletion('claimFaucet')}
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

        {/* Swap tokens at Uniswap */}
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-2xl bg-transparent">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow relative gap-[7px]">
              <Image
                src={arrowRight}
                alt="Arrow"
                className="flex-grow-0 flex-shrink-0"
              />
              <p className="flex-grow w-full text-xl font-medium text-left text-white">
                Swap tokens at Coinbase
              </p>
            </div>
            {questsCompleted.swapTokens ? (
              <Image
                src={verify}
                alt="Verified"
                className="flex-grow-0 flex-shrink-0"
              />
            ) : (
              <div
                className="flex cursor-pointer justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden px-3 py-2 rounded-lg bg-[#2a5450]"
                onClick={() => handleQuestCompletion('swapTokens')}
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

        {/* Bridge into Base */}
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-2xl bg-transparent">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow relative gap-[7px]">
              <Image
                src={arrowRight}
                alt="Arrow"
                className="flex-grow-0 flex-shrink-0"
              />
              <p className="flex-grow w-full text-xl font-medium text-left text-white">
                Bridge into Base
              </p>
            </div>
            {questsCompleted.bridgeToBase ? (
              <Image
                src={verify}
                alt="Verified"
                className="flex-grow-0 flex-shrink-0"
              />
            ) : (
              <div
                className="flex cursor-pointer justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden px-3 py-2 rounded-lg bg-[#2a5450]"
                onClick={() => handleQuestCompletion('bridgeToBase')}
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
