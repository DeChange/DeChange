import React from 'react'

const WhatIsDeFi: React.FC = () => {
  return (
    <div className="w-full h-96 flex-col justify-start items-start gap-8 inline-flex">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
          odio massa. Maecenas et lorem et quam malesuada dignissim nec eu est.
          Mauris pulvinar mollis mauris et posuere. Proin sed hendrerit erat.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis
          sapien odio, facilisis sed scelerisque eget, viverra quis ligula.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
          odio massa. Maecenas et lorem et quam malesuada dignissim nec eu est.
          Mauris pulvinar mollis mauris et posuere.{' '}
        </div>
      </div>
      <div className="self-stretch py-4 justify-between items-start inline-flex">
        <div className="grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
          <div className="mt-14 flex flex-col justify-center items-end flex-grow gap-2">
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
    </div>
  )
}

export default WhatIsDeFi
