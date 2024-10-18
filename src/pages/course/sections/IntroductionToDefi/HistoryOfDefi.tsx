import React, { useState } from 'react'
import Image from 'next/image'

import previewImage from '../../../../assets/images/preview-image.png'
import playButton from '../../../../assets/icons/play-button.svg'

const HistoryOfDeFi: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[9px]">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-4xl font-semibold text-left text-white">
          History of DeFi
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
        <p className="text-xl mt-8 text-left text-white">Watch this video</p>
      </div>

      <div className="relative w-full -mt-3 h-[358px] flex justify-center items-center">
        {!isPlaying && (
          <>
            <div className="absolute inset-0 bg-black opacity-65 rounded-3xl  h-[354px]" />
            <Image
              src={previewImage}
              alt="Preview"
              className="flex-grow-0 flex-shrink-0 rounded-3xl"
              width={768}
              height={358}
            />
          </>
        )}

        {!isPlaying ? (
          <button onClick={handlePlayVideo} className="absolute">
            <Image
              src={playButton}
              alt="Play Button"
              className="flex-grow-0 flex-shrink-0"
              width={78}
              height={78}
            />
          </button>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DX8RYXbTYNw?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  )
}

export default HistoryOfDeFi
