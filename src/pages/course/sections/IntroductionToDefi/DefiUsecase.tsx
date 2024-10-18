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
            DeFi allows users to lend and borrow assets without intermediaries.
            <br />
            Decentralized Exchanges (DEXs).
            <br />
            Digital currencies pegged to traditional assets like the US dollar
            for stability.
            <br />
            Users earn rewards by providing liquidity to decentralized
            platforms.
            <br />
            Physical assets, like real estate, are converted into digital
            tokens.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DefiUsecase
