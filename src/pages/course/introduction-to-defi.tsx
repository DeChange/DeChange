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
                <div className="grow shrink basis-0 h-1 bg-[#545353] rounded" />
                <div className="grow shrink basis-0 h-1 bg-[#545353] rounded" />
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
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 15.125C3 14.6277 3.19754 14.1508 3.54917 13.7992C3.90081 13.4475 4.37772 13.25 4.875 13.25H15"
                    stroke="#A8A7A8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.875 2H15V17H4.875C4.37772 17 3.90081 16.8025 3.54917 16.4508C3.19754 16.0992 3 15.6223 3 15.125V3.875C3 3.37772 3.19754 2.90081 3.54917 2.54917C3.90081 2.19754 4.37772 2 4.875 2V2Z"
                    stroke="#A8A7A8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  What is Defi?
                </p>
                <svg
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M13.3332 4.5L5.99984 11.8333L2.6665 8.5"
                    stroke="#7B51EA"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5 rounded-lg bg-[#7b51ea]/[0.18]">
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3.375 14L14.625 14C15.2463 14 15.75 13.4963 15.75 12.875L15.75 5C15.75 4.37868 15.2463 3.875 14.625 3.875L3.375 3.875C2.75368 3.875 2.25 4.37868 2.25 5L2.25 12.875C2.25 13.4963 2.75368 14 3.375 14Z"
                    stroke="#7B51EA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 16.25H6.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 8.9375L7.875 6.6875V11.1875L11.25 8.9375Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="flex-grow w-[179px] text-base font-semibold text-left text-white">
                  History of Defi
                </p>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5">
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 15.125C3 14.6277 3.19754 14.1508 3.54917 13.7992C3.90081 13.4475 4.37772 13.25 4.875 13.25H15"
                    stroke="#A8A7A8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.875 2H15V17H4.875C4.37772 17 3.90081 16.8025 3.54917 16.4508C3.19754 16.0992 3 15.6223 3 15.125V3.875C3 3.37772 3.19754 2.90081 3.54917 2.54917C3.90081 2.19754 4.37772 2 4.875 2V2Z"
                    stroke="#A8A7A8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  Defi Usecase
                </p>
                <svg
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M12.6667 7.83333H3.33333C2.59695 7.83333 2 8.43028 2 9.16666V13.8333C2 14.5697 2.59695 15.1667 3.33333 15.1667H12.6667C13.403 15.1667 14 14.5697 14 13.8333V9.16666C14 8.43028 13.403 7.83333 12.6667 7.83333Z"
                    stroke="#2A2A2A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.6665 7.83333V5.16666C4.6665 4.28261 5.01769 3.43476 5.64281 2.80964C6.26794 2.18452 7.11578 1.83333 7.99984 1.83333C8.88389 1.83333 9.73174 2.18452 10.3569 2.80964C10.982 3.43476 11.3332 4.28261 11.3332 5.16666V7.83333"
                    stroke="#2A2A2A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5">
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3.75 2.75L14.25 9.5L3.75 16.25V2.75Z"
                    stroke="#A8A7A8"
                    stroke-width={2}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  Practice
                </p>
                <svg
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M12.6667 7.83333H3.33333C2.59695 7.83333 2 8.43028 2 9.16666V13.8333C2 14.5697 2.59695 15.1667 3.33333 15.1667H12.6667C13.403 15.1667 14 14.5697 14 13.8333V9.16666C14 8.43028 13.403 7.83333 12.6667 7.83333Z"
                    stroke="#2A2A2A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.6665 7.83333V5.16666C4.6665 4.28261 5.01769 3.43476 5.64281 2.80964C6.26794 2.18452 7.11578 1.83333 7.99984 1.83333C8.88389 1.83333 9.73174 2.18452 10.3569 2.80964C10.982 3.43476 11.3332 4.28261 11.3332 5.16666V7.83333"
                    stroke="#2A2A2A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[39px] relative overflow-hidden gap-[11px] px-2 py-2.5">
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M9 11.75V10.625C11.1748 10.625 12.9375 9.11398 12.9375 7.25C12.9375 5.38602 11.1748 3.875 9 3.875C6.82523 3.875 5.0625 5.38602 5.0625 7.25"
                    stroke="#A8A7A8"
                    stroke-width={2}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 16.25C9.62132 16.25 10.125 15.7463 10.125 15.125C10.125 14.5037 9.62132 14 9 14C8.37868 14 7.875 14.5037 7.875 15.125C7.875 15.7463 8.37868 16.25 9 16.25Z"
                    fill="#A8A7A8"
                  />
                </svg>
                <p className="flex-grow w-[152px] text-base text-left text-[#a8a7a8]">
                  Quiz
                </p>
                <svg
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M12.6667 7.83334H3.33333C2.59695 7.83334 2 8.43029 2 9.16667V13.8333C2 14.5697 2.59695 15.1667 3.33333 15.1667H12.6667C13.403 15.1667 14 14.5697 14 13.8333V9.16667C14 8.43029 13.403 7.83334 12.6667 7.83334Z"
                    stroke="#2A2A2A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.6665 7.83334V5.16667C4.6665 4.28261 5.01769 3.43477 5.64281 2.80965C6.26794 2.18453 7.11578 1.83334 7.99984 1.83334C8.88389 1.83334 9.73174 2.18453 10.3569 2.80965C10.982 3.43477 11.3332 4.28261 11.3332 5.16667V7.83334"
                    stroke="#2A2A2A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
            <svg
              width={252}
              height={363}
              viewBox="0 0 252 363"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 opacity-50"
              preserveAspectRatio="none"
            >
              <g opacity="0.5" filter="url(#filter0_f_2051_6064)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M259.73 174.503C277.977 174.662 295.595 179.234 309.868 190.604C326.139 203.565 340.36 220.093 342.884 240.742C345.696 263.744 338.225 286.682 323.834 304.846C307.477 325.492 286.053 346.675 259.73 345.698C233.801 344.735 218.867 318.295 200.215 300.257C181.008 281.684 149.146 267.382 151.194 240.742C153.236 214.178 185.971 203.604 208.713 189.725C224.461 180.114 241.282 174.343 259.73 174.503Z"
                  fill="url(#pattern0_2051_6064)"
                />
              </g>
            </svg>
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
