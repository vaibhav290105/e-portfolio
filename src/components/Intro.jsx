// src/components/Intro.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Intro = () => {
  return (
    <div id="intro" className="intro-section h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="contact flex flex-col md:flex-row items-center justify-center p-4">
        {/* Left Side */}
        <div className="i-name text-center md:text-left">
          <span className="block text-4xl font-bold text-gray-800 dark:text-white">Hi, I am</span>
          <span className="block text-5xl font-extrabold text-blue-600 dark:text-blue-400">Vaibhav Gupta</span>
          <span className="block text-2xl text-gray-600 dark:text-gray-300">Full Stack Developer</span>
        </div>

        {/* Right Side */}
        <div className="i-icons flex space-x-4 mt-4 md:mt-0">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-3xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white text-3xl">
            <FaGithub />
          </a>
        </div>

        {/* Hire Me Button */}
        <button className="button i-button mt-6 bg-green-500 text-white px-6 py-3 rounded">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Intro;
