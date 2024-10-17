import React from 'react'

const DefiUsecase: React.FC = () => {
  return (
    <div className="w-full flex-col justify-start items-start gap-8">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[9px]">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-4xl font-semibold text-left text-white">
          Defi Usecase
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xl text-left text-white mt-8">
            Here are a couple of use cases relevant to the application of Defi
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Nam sit amet odio massa.
            <br />
            Maecenas et lorem et quam malesuada dignissim nec eu est.
            <br />
            Mauris pulvinar mollis mauris et posuere.
            <br />
            Proin sed hendrerit erat. Interdum et malesuada.
          </p>
        </div>
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

export default DefiUsecase
