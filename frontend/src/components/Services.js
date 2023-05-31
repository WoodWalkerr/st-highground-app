import React from 'react';
import { FaHiking, FaMountain, FaCampground } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-white overflow-hidden h-screen" name="Services">
      <div className="max-w-6xl mx-auto p-5 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our services! We offer a wide range of outdoor activities
            and adventures to suit your interests and preferences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaHiking className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Hiking Tours
            </h3>
            <p className="text-gray-600 text-center">
              Embark on an unforgettable hiking tour with experienced guides.
              Explore breathtaking trails and immerse yourself in nature's
              beauty.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaMountain className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mountain Climbing
            </h3>
            <p className="text-gray-600 text-center">
              Conquer the majestic mountains with our expert climbers. Push your
              limits and experience the thrill of reaching new heights.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaCampground className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Camping Trips
            </h3>
            <p className="text-gray-600 text-center">
              Immerse yourself in the great outdoors with our camping trips.
              Disconnect from the modern world and reconnect with nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
