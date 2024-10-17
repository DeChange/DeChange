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
          Decentralized Finance: A New Financial Era
        </div>
        <div className="self-stretch text-white text-xl font-normal font-['Figtree']">
          Decentralized Finance (DeFi) is a financial ecosystem built on
          blockchain technology that offers a variety of services like lending,
          borrowing, and trading without intermediaries. Users have full control
          of their assets and can engage directly with decentralized
          applications.
          <br />
          <br />
          DeFi operates on smart contracts, which are self-executing agreements
          that reduce the need for trusted third parties. As a result, the
          system increases transparency and efficiency.{' '}
        </div>
      </div>
    </div>
  )
}

export default WhatIsDeFi
