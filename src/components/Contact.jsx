// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., email service)
    console.log(formData);
    // Reset form
    setFormData({
      user_name: '',
      user_email: '',
      user_message: '',
    });
  };

  return (
    <div id="contact" className="contact-section py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact</h2>
        <div className="contact-form flex flex-col md:flex-row bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
          {/* Left Divs for Dark Mode Colors */}
          <div className="w-left hidden md:block bg-blue-500 dark:bg-blue-700 w-1/2"></div>
          <div className="awesome hidden md:block bg-green-500 dark:bg-green-700 w-1/2"></div>

          {/* Right - Form */}
          <div className="c-right w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="user_name" className="block text-gray-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="user_email" className="block text-gray-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="user_message" className="block text-gray-700 dark:text-gray-200">Message</label>
                <textarea
                  id="user_message"
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-button bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
