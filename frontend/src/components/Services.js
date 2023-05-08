import React from 'react';
import { FaHiking, FaMountain, FaCampground } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
            mauris vel massa consequat fermentum. Vestibulum molestie tincidunt felis
            vel consectetur.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaHiking className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hiking Tours</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
              mauris vel massa consequat fermentum. Vestibulum molestie tincidunt felis
              vel consectetur.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaMountain className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mountain Climbing</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
              mauris vel massa consequat fermentum. Vestibulum molestie tincidunt felis
              vel consectetur.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaCampground className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Camping Trips</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
              mauris vel massa consequat fermentum. Vestibulum molestie tincidunt felis
              vel consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
