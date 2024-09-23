// src/components/Services.jsx
import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className="services-section py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="awesome text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Services</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            What I offer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="cards bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaCode className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Building responsive and dynamic websites.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="cards bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaMobileAlt className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Mobile Development</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Creating mobile applications for Android and iOS.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="cards bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaPaintBrush className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Designing user-friendly interfaces and experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
