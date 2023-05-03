import React from 'react';
import { updateVisitStatus } from '../services/VisitServices';

const VisitListItem = ({ visit }) => {
  const handleAccept = async (user_id) => {
    try {
      await updateVisitStatus(user_id, 'accepted');
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDecline = async (user_id) => {
    try {
      await updateVisitStatus(user_id, 'declined');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex">
        <button
          onClick={() => handleAccept(visit.user_id)}
          className="px-3 py-1 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
        >
          Accept
        </button>
        <button
          onClick={() => handleDecline(visit.user_id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default VisitListItem;
