import React from 'react';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white p-4 flex justify-between items-center">
      <p className="text-center">© 2024 DeChange, Inc. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="text-xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;