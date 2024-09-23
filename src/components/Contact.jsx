import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // For showing success message
  const [errorMessage, setErrorMessage] = useState(''); // For showing error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_mjcjybp', 'template_1ph9ay5', e.target, 'XTCEZbDwfEYyMtCVK')
    .then((result) => {
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      setFormData({
        user_name: '',
        user_email: '',
        user_message: '',
      });
    })
    .catch((error) => {
      setErrorMessage('Failed to send message. Please try again.');
      setSuccessMessage('');
    });
};

  return (
    <div id="contact" className="contact-section py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact</h2>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <div className="contact-form flex flex-col md:flex-row bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
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
