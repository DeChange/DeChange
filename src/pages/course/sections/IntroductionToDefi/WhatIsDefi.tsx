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
    </div>
  )
}

export default WhatIsDeFi
