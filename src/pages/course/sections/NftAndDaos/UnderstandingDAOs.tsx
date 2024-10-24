import React from 'react'

const UnderstandingDAOs: React.FC = () => {
  return (
    <div className="w-full flex-col justify-start items-start gap-8">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[9px]">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-4xl font-semibold text-left text-white">
          Understanding DAOs
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xl text-left text-white mt-8">
            Decentralized Autonomous Organizations (DAOs) are entities
            represented by rules encoded as a computer program that is
            transparent, controlled by organization members and not influenced
            by a central government. DAOs are used for various purposes,
            including governance, funding, and community building.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UnderstandingDAOs
