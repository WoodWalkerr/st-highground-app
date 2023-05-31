import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/lake.jpg';

const About = () => {
  const navigate = useNavigate();


  return (
    <div className="bg-white h-screen flex justify-center items-center" name='About'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12  ">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              What is <span className='text-[#4CAF50]'>HIGHGROUND?</span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our app is designed to make it easy for you to book nature experiences
              and explore the great outdoors. Whether you're looking to go on a hiking
              trip, kayaking adventure, or simply want to relax in a beautiful natural
              setting, we've got you covered. Our team is passionate about protecting the
              environment, so we partner with eco-friendly tour operators and promote
              sustainable travel practices.
            </p>
            <button
              className="inline-block bg-green-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-600 transition duration-200"
            onClick={() => navigate('/contact-us')}
            >
              Contact Us
              </button>
          </div>
          <div className="md:w-1/2 flex justify-center items-center ">
            <img
              src={logo}
              alt="Nature Environment Booking App Logo"
              className="h-[300px] mx-auto md:mx-0 shadow-lg shadow-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
