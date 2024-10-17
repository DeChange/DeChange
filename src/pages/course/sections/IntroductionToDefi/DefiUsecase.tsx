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
    </div>
  )
}

export default DefiUsecase
