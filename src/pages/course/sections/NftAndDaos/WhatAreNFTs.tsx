import React from 'react'

const WhatAreNFTs: React.FC = () => {
  return (
    <div className="w-full h-96 flex-col justify-start items-start gap-8 inline-flex">
      <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch text-white text-4xl font-semibold font-['Figtree']">
          What are NFTs
        </div>
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 h-1.5 bg-[#7b50ea] rounded" />
        </div>
      </div>
      <div className="self-stretch h-64 flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch text-white text-2xl font-medium font-['Figtree']">
          The Unique Digital Asset
        </div>
        <div className="self-stretch text-white text-xl font-normal font-['Figtree']">
          Non-Fungible Tokens (NFTs) are unique digital assets verified using
          blockchain technology. Unlike cryptocurrencies, which are fungible and
          can be exchanged for one another, NFTs represent ownership of a
          specific item or piece of content, such as art, music, or virtual real
          estate.
          <br />
          <br />
          NFTs can be used for various applications, including digital art,
          collectibles, music, and virtual real estate, providing creators with
          new ways to monetize their work and engage with their audience.{' '}
        </div>
      </div>
    </div>
  )
}

export default WhatAreNFTs
