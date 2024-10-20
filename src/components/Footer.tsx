import Image from 'next/image'
import React from 'react'
import { FaYoutube, FaDiscord, FaLinkedin } from 'react-icons/fa'
import x from '../assets/icons/x.svg'

const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-700 p-4 pb-8 flex justify-between items-center z-10">
      <p className="text-center font-medium">
        © 2024 DeChange, Inc. All rights reserved.
      </p>
      <div className="flex gap-8">
        <a
          href="https://youtube.com/@dechange"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-gray-700 text-2xl" />
        </a>
        <a
          href="https://x.com/dechange_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={x} alt="X" className="text-gray-700 text-2xl" />
        </a>
        <a
          href="https://discord.gg/gPQHyKKg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className="text-gray-700 text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/dechange"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-gray-700 text-2xl" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
