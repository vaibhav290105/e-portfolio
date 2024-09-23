// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-section bg-gray-800 dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Email */}
        <div className="f-content text-gray-300">
          <span>vaibhavgupta290105@gmail.com</span>
        </div>

        {/* Social Icons */}
        <div className="f-icons flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/vaibhav290105" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <FaGithub />
          </a>
          <a href="www.linkedin.com/in/vaibhav-gupta-701987272" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
