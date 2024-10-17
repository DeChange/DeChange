import React from 'react'

const HistoryOfDeFi: React.FC = () => {
  return (
    <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[9px]">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-4xl font-semibold text-left text-white">
          History of Defi
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xl text-left text-white">
            Watch this video
          </p>
        </div>
        <svg
          width="100%" // Set width to 100% for responsiveness
          height="auto" // Set height to auto to maintain aspect ratio
          viewBox="0 0 767 358"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow-0 flex-shrink-0 relative"
          preserveAspectRatio="xMidYMid meet" // Maintain aspect ratio
        >
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0H742.493C755.748 0 766.493 10.7452 766.493 24V334C766.493 347.255 755.748 358 742.493 358H24C10.7452 358 0 347.255 0 334V24Z"
            fill="#191818"
          />
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0H742.493C755.748 0 766.493 10.7452 766.493 24V334C766.493 347.255 755.748 358 742.493 358H24C10.7452 358 0 347.255 0 334V24Z"
            fill="url(#pattern0_106_3412)"
          />
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0H742.493C755.748 0 766.493 10.7452 766.493 24V334C766.493 347.255 755.748 358 742.493 358H24C10.7452 358 0 347.255 0 334V24Z"
            fill="black"
            fillOpacity="0.64"
          />
          <rect
            x={23}
            y={330}
            width={720}
            height={4}
            rx={2}
            fill="#F1F1F1"
            fillOpacity="0.29"
          />
          <rect x={23} y={330} width={9} height={4} rx={2} fill="#FF0000" />
          <rect x={340} y={140} width={78} height={78} rx={39} fill="white" />
          <path
            d="M388.953 162.436C400.229 168.946 405.867 172.201 406.818 176.858C407.102 178.253 407.102 179.69 406.818 181.084C405.867 185.742 400.229 188.997 388.953 195.507C377.677 202.017 372.039 205.272 367.53 203.767C366.181 203.316 364.936 202.597 363.871 201.654C360.312 198.502 360.312 191.991 360.313 178.971C360.313 165.951 360.313 159.441 363.871 156.288C364.936 155.345 366.181 154.626 367.53 154.176C372.039 152.67 377.677 155.925 388.953 162.436Z"
            fill="#6B02FF"
          />
          <defs>
            <pattern
              id="pattern0_106_3412"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                href="#image0_106_3412"
                transform="matrix(0.00212766 0 0 0.00455541 0 -0.0557599)"
              />
            </pattern>
            <image id="image0_106_3412" width={470} height={244} />
          </defs>
        </svg>
      </div>

      <div className="flex mt-14 justify-between items-start self-stretch flex-grow-0 flex-shrink-0 py-4">
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
                d="M11.25 13.5L6.75 9L11.25 4.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                Previous
              </p>
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
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                Next
              </p>
            </div>
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
  )
}

export default HistoryOfDeFi
