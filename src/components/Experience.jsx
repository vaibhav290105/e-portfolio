// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      years: '1',
      title: 'Year of Experience',
      description: 'In web development.',
    },
    {
      id: 2,
      years: '10+',
      title: 'Projects Completed',
      description: 'Successfully delivered projects.',
    },
    {
      id: 3,
      years: '0',
      title: 'Companies Worked',
      description: 'Gained diverse industry experience.',
    },
  ];

  return (
    <div id="experience" className="experience-section py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Experience</h2>
        <div className="achievement grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <div className="circle absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                {exp.years}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
