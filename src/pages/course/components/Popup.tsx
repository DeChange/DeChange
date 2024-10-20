import { useRouter } from 'next/router'
import React from 'react'

interface PopupProps {
  title: string
  message: string
  subMessage: string
  onClose: () => void
}

const Popup: React.FC<PopupProps> = ({
  title,
  message,
  subMessage,
  onClose,
}) => {
  const router = useRouter()

  const handleMoreCourses = () => {
    router.push('/')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-[653px] h-[453px] relative overflow-hidden rounded-3xl border border-[#7B51EA2E] bg-[#060709]/[0.39] backdrop-blur-[15.4px]">
        <svg
          width={653}
          height={346}
          viewBox="0 0 653 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[218.75px] top-[406.71px]"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_f_284_5807)">
            <ellipse
              cx="306.5"
              cy="411.535"
              rx="86.5"
              ry="110.57"
              fill="#7B51EA"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_284_5807"
              x="-80.8696"
              y="0.0956421"
              width="774.739"
              height="822.878"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150.435"
                result="effect1_foregroundBlur_284_5807"
              />
            </filter>
          </defs>
        </svg>
        <svg
          width={251}
          height={103}
          viewBox="0 0 251 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[291.2px] top-[440.2px]"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_f_284_5808)">
            <ellipse cx="125.5" cy="102.5" rx="34.5" ry="11.5" fill="#7B51EA" />
          </g>
          <defs>
            <filter
              id="filter0_f_284_5808"
              x="0.300003"
              y="0.300003"
              width="250.4"
              height="204.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="45.35"
                result="effect1_foregroundBlur_284_5808"
              />
            </filter>
          </defs>
        </svg>
        <div className="w-[621px] h-[259px] absolute left-4 top-4 overflow-hidden rounded-2xl bg-[#7b51ea]">
          <p className="absolute left-[180px] top-[115px] text-2xl font-semibold text-center text-white">
            {title}
          </p>
          <p className="absolute left-[-43px] top-[80.43px] opacity-50 text-[144.8823699951172px] font-semibold text-left text-white">
            !
          </p>
          <p className="absolute left-[80.08px] top-[79.95px] opacity-60 text-[144.8823699951172px] font-semibold text-left text-white">
            !
          </p>
          <p className="absolute left-[-0.32px] top-[-41.13px] text-[211.4100799560547px] font-semibold text-left text-white">
            !
          </p>
        </div>
        <div className="w-[621px] h-[72px] absolute left-4 top-[300px] overflow-hidden rounded-2xl bg-black/[0.28]">
          <p className="absolute left-[492px] top-[15px] text-4xl font-bold text-center text-white">
            +100
          </p>
          <p className="absolute left-5 top-3 text-2xl font-semibold text-left text-white">
            {message}
          </p>
          <p className="absolute left-5 top-[42px] text-base text-left text-[#7e7e7e]">
            {subMessage}
          </p>
          <div className="flex justify-start items-center absolute left-[440px] top-[21px] gap-[11.63636302947998px] p-[2.909090757369995px]">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[26.18px] h-[26.18px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_2083_5325)">
                <path
                  d="M0.90918 5.18367C0.90918 2.82288 2.82298 0.909088 5.18376 0.909088H14.0001C21.23 0.909088 27.091 6.77009 27.091 14C27.091 21.2299 21.23 27.0909 14.0001 27.0909H5.18376C2.82298 27.0909 0.90918 25.1771 0.90918 22.8163V5.18367Z"
                  fill="#7B51EA"
                />
                <path
                  d="M4.40039 -0.64044C4.40039 -3.15861 6.44177 -5.2 8.95994 -5.2H18.364C26.0759 -5.2 32.3277 1.05174 32.3277 8.76364C32.3277 16.4755 26.0759 22.7273 18.364 22.7273H8.95995C6.44178 22.7273 4.40039 20.6859 4.40039 18.1677V-0.64044Z"
                  fill="#9C7CEF"
                />
              </g>
              <defs>
                <clipPath id="clip0_2083_5325">
                  <path
                    d="M0.90918 5.18367C0.90918 2.82288 2.82298 0.909088 5.18376 0.909088H14.0001C21.23 0.909088 27.091 6.77009 27.091 14C27.091 21.2299 21.23 27.0909 14.0001 27.0909H5.18376C2.82298 27.0909 0.90918 25.1771 0.90918 22.8163V5.18367Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-start w-[653px] absolute left-0 top-[377px] p-4">
          <div className="flex flex-col justify-center items-start flex-grow gap-2">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative overflow-hidden px-4 py-2 rounded-lg"
              style={{
                filter:
                  'drop-shadow(0px 0px 0px rgba(123,81,234,0.19)) drop-shadow(0px 0px 0px rgba(123,81,234,0.25))',
              }}
            >
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
                  d="M14.0625 3.9375L3.9375 14.0625"
                  stroke="white"
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0625 14.0625L3.9375 3.9375"
                  stroke="white"
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                <button onClick={onClose}>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                    Close
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end flex-grow gap-2">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative overflow-hidden px-4 py-2 rounded-lg bg-[#7b51ea]"
              style={{
                boxShadow:
                  '0px 0px 0px 0 rgba(123,81,234,0.19), 0px 0px 0px 0 rgba(123,81,234,0.25)',
              }}
            >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                <button onClick={handleMoreCourses}>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                    More Course
                  </p>
                </button>
              </div>
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
                  d="M6.75 13.5L11.25 9L6.75 4.5"
                  stroke="white"
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
