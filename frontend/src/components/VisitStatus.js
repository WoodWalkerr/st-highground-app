import React from 'react';
import { updateVisitStatus } from '../services/VisitServices';

const VisitListItem = () => {
  const handleAccept = async () => {
    try {
      await updateVisitStatus('accepted');
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDecline = async () => {
    try {
      await updateVisitStatus('declined');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-between px-4 py-2 border-b border-gray-300">

      <div className="flex">
        <button
          onClick={handleAccept}
          className="px-3 py-1 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default VisitListItem;
