import React from 'react';
import { ConnectButton } from 'thirdweb/react';
import { client } from '../utils/client';

import { inAppWallet, createWallet } from 'thirdweb/wallets';

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
];

const Header: React.FC = () => {
  return (
    <div className='flex justify-between w-full bg-background z-10 items-center pt-12 md:pt-8 pb-12 md:pl-72 pr-8 text-white fixed top-0'>
      <h2 className='text-xl font-bold w-1/5 px-4'>Classroom</h2>
      <div className='flex-1 flex justify-center w-3/5'>
        <input
          type='text'
          placeholder='Search Topics, project or Narrative'
          className='w-4/5 max-w-[600px] h-11 px-5 py-3 hidden bg-white/5 rounded-3xl justify-start items-center gap-2 md:inline-flex focus:outline-none focus:ring-2 focus:ring-purple-600'
        />
      </div>

      <div className='mr-12 w-24 '>
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{ size: 'compact' }}
        />
      </div>
    </div>
  );
};

export default Header;
