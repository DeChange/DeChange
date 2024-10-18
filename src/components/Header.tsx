// import Image from 'next/image'
// import wallet from '../assets/icons/wallet.svg'
import React from 'react'
import { ConnectButton } from 'thirdweb/react'
import { client } from '../utils/client'

import { inAppWallet, createWallet } from 'thirdweb/wallets'

const wallets = [
  inAppWallet({
    auth: {
      options: [
        'google',
        'discord',
        'farcaster',
        'email',
        'phone',
        'coinbase',
        'passkey',
      ],
    },
  }),
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  createWallet('me.rainbow'),
  createWallet('io.rabby'),
  createWallet('io.zerion.wallet'),
]

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 text-white">
      <h2 className="text-2xl font-bold -ml-4">Classroom</h2>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search Topics, project or Narrative"
          className="w-96 h-11 px-5 py-3  bg-white/5 rounded-3xl justify-start items-center gap-2 inline-flex focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      {/* <button className="flex items-center bg-primary-400 px-4 py-2 rounded"> */}
      {/* <Image
          src={wallet}
          alt="Wallet"
          width={18}
          height={18}
          className="mr-2"
        /> */}
      <div className="ml-8">
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{ size: 'wide' }}
        />
      </div>
      {/* </button> */}
    </header>
  )
}

export default Header
