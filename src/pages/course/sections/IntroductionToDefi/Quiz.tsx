import React from 'react'

const Quiz: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-8">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[9px]">
        <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <p className="flex-grow-0 flex-shrink-0 text-4xl font-semibold text-left text-white">
            Quiz
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 py-[5px]">
            <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-white">
              Ensure to answer questions CORRECTLY, answers cannot be changed
              once submitted.{' '}
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-[11px] bg-black/[0.16]">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-11">
            <div className="flex justify-start items-center flex-grow relative gap-[7px]">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M4.81039 6.75H13.1894C13.3377 6.75003 13.4827 6.79404 13.606 6.87645C13.7293 6.95886 13.8254 7.07598 13.8821 7.21301C13.9389 7.35003 13.9538 7.50081 13.9248 7.64627C13.8959 7.79174 13.8245 7.92536 13.7196 8.03025L9.53014 12.2197C9.38949 12.3603 9.19876 12.4393 8.99989 12.4393C8.80101 12.4393 8.61028 12.3603 8.46964 12.2197L4.28014 8.03025C4.17528 7.92536 4.10388 7.79174 4.07495 7.64627C4.04602 7.50081 4.06088 7.35003 4.11763 7.21301C4.17438 7.07598 4.27049 6.95886 4.39379 6.87645C4.5171 6.79404 4.66207 6.75003 4.81039 6.75Z"
                  fill="white"
                />
              </svg>
              <p className="flex-grow w-full text-xl font-semibold text-left text-white">
                Which of the following describes Defi?
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-4 p-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  x={3}
                  y={3}
                  width={18}
                  height={18}
                  rx={9}
                  stroke="white"
                  strokeWidth={2}
                />
              </svg>
              <p className="flex-grow w-full text-base text-left text-[#a8a7a8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-4 p-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  x={3}
                  y={3}
                  width={18}
                  height={18}
                  rx={9}
                  stroke="white"
                  strokeWidth={2}
                />
              </svg>
              <p className="flex-grow w-full text-base text-left text-[#a8a7a8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-4 p-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  x={3}
                  y={3}
                  width={18}
                  height={18}
                  rx={9}
                  stroke="white"
                  strokeWidth={2}
                />
              </svg>
              <p className="flex-grow w-full text-base text-left text-[#a8a7a8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-[11px]">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-11">
            <div className="flex justify-start items-center flex-grow relative gap-[7px]">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.75 13.1896L6.75 4.81061C6.75003 4.6623 6.79404 4.51733 6.87645 4.39402C6.95886 4.27071 7.07598 4.17461 7.21301 4.11786C7.35003 4.0611 7.50081 4.04625 7.64627 4.07518C7.79174 4.1041 7.92536 4.17551 8.03025 4.28036L12.2197 8.46986C12.3603 8.61051 12.4393 8.80124 12.4393 9.00011C12.4393 9.19899 12.3603 9.38972 12.2197 9.53036L8.03025 13.7199C7.92536 13.8247 7.79174 13.8961 7.64627 13.9251C7.50081 13.954 7.35003 13.9391 7.21301 13.8824C7.07598 13.8256 6.95886 13.7295 6.87645 13.6062C6.79404 13.4829 6.75003 13.3379 6.75 13.1896Z"
                  fill="white"
                />
              </svg>
              <p className="flex-grow w-full text-xl font-semibold text-left text-white">
                Which of the following describes Defi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
