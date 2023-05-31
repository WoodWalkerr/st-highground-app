import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 text-green-500">Contact Us</h1>
          <p className="text-gray-600 leading-relaxed mb-8 text-center">
            We would love to hear from you! If you have any questions, suggestions,
            or feedback, please feel free to reach out to us using the contact
            information below.
          </p>
          <div className="flex flex-col items-center mb-8">
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Email:</span> highground2023@outlook.com
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Phone:</span> +63-953-0412-689
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Address:</span> Tigbao, Zamboanga del Sur
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200 transform hover:scale-110"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
