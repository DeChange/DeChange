import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'

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
import book from '../../assets/icons/stud-book.svg'
import monitor from '../../assets/icons/monitor.svg'
import play from '../../assets/icons/play.svg'
import question from '../../assets/icons/question-mark.svg'
import check from '../../assets/icons/check.svg'
import padlock from '../../assets/icons/padlock.svg'

import defaultAvatar from '../../assets/images/default-avatar.svg'

const IntroductionToDeFi: React.FC = () => {
  return (
    <Layout>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet odio massa. Maecenas et lorem et quam malesuada dignissim
                nec eu est. Mauris pulvinar mollis mauris et posuere.
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

          <div className="mt-14 mb-28 w-full h-96 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-white text-4xl font-semibold font-['Figtree']">
                What is Defi
              </div>
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-1.5 bg-[#7b50ea] rounded" />
              </div>
            </div>
            <div className="self-stretch h-64 flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch text-white text-2xl font-medium font-['Figtree']">
                Sub title
              </div>
              <div className="self-stretch text-white text-xl font-normal font-['Figtree']">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet odio massa. Maecenas et lorem et quam malesuada dignissim
                nec eu est. Mauris pulvinar mollis mauris et posuere. Proin sed
                hendrerit erat. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Duis sapien odio, facilisis sed scelerisque eget,
                viverra quis ligula.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet odio massa. Maecenas et lorem et quam malesuada dignissim
                nec eu est. Mauris pulvinar mollis mauris et posuere.{' '}
              </div>
            </div>
            <div className="self-stretch py-4 justify-between items-start inline-flex">
              <div className="grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
                <div className="h-11 px-4 py-2 bg-[#7b50ea] rounded-lg shadow justify-center items-center inline-flex">
                  <div className="px-2 justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-medium font-['Figtree']">
                      Next
                    </div>
                  </div>
                  <div className="w-4 h-4 py-1 justify-center items-center flex" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow h-full flex flex-col justify-between pl-4 gap-8">
          <div className="flex flex-col mt-6 justify-start items-start w-[252px] h-[372px] relative overflow-hidden rounded-3xl bg-white/[0.02] backdrop-blur-xl">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#171a20]">
              <p className="flex-grow w-[220px] text-xl font-semibold text-left text-white">
                Course Outline
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2 border-t-0 border-r-0 border-b border-l-0 border-[#171a20]">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5">
                <Image
                  src={book}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  What is Defi?
                </p>
                <Image
                  src={check}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5 rounded-lg bg-[#7b51ea]/[0.18]">
                <Image
                  src={monitor}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
                <p className="flex-grow w-[179px] text-base font-semibold text-left text-white">
                  History of Defi
                </p>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5">
                <Image
                  src={book}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  Defi Usecase
                </p>
                <Image
                  src={padlock}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5">
                <Image
                  src={play}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  Practice
                </p>
                <Image
                  src={padlock}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5">
                <Image
                  src={question}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  Quiz
                </p>
                <Image
                  src={padlock}
                  alt="User"
                  className="flex-grow-0 flex-shrink-0"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-4 border-t border-r-0 border-b-0 border-l-0 border-[#171a20]">
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-11 overflow-hidden px-4 py-2 rounded-lg bg-[#7b51ea]/25">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/[0.48]">
                    Claim Rewards
                  </p>
                </div>
              </div>
            </div>
          </div>

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
    </Layout>
  )
}

export default IntroductionToDeFi
