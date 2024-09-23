// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <div className="n-wrapper fixed w-full top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Side */}
        <div className="n-left">
          <div className="n-name text-xl font-bold text-gray-800 dark:text-white">YourInitials</div>
        </div>

        {/* Right Side */}
        <div className="n-right flex items-center">
          <ul className="n-list hidden md:flex space-x-6">
            <li>
              <Link to="intro" smooth={true} duration={500} className="cursor-pointer text-gray-800 dark:text-white">
                Intro
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} className="cursor-pointer text-gray-800 dark:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer text-gray-800 dark:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} className="cursor-pointer text-gray-800 dark:text-white">
                Experience
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-gray-800 dark:text-white">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="button n-button ml-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
            Contact Me
            </Link>
          <a
            href="/resume vaibhav.pdf"  // Correct path to the file in the public folder
            download="Your_Resume.pdf"  // Specify the download file name
            className="button ml-4 bg-purple-500 text-white px-4 py-2 rounded"
            >
            Download Resume
            </a>
          <div className="toggle ml-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
