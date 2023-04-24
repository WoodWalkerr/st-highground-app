// RequestList.js
import { useState } from 'react';
import { updateRequestStatus } from '../services/VisitServices';

function RequestList({ requests }) {
  const [updatedRequests, setUpdatedRequests] = useState(requests);

  const handleAccept = (requestId) => {
    updateRequestStatus(requestId, 'accepted').then((updatedRequest) => {
      // Update the state of the component with the updated request
      const updatedRequestsCopy = [...updatedRequests];
      const requestIndex = updatedRequestsCopy.findIndex((request) => request.id === updatedRequest.id);
      updatedRequestsCopy[requestIndex] = updatedRequest;
      setUpdatedRequests(updatedRequestsCopy);
    });
  };

  const handleDecline = (requestId) => {
    updateRequestStatus(requestId, 'declined').then((updatedRequest) => {
      // Update the state of the component with the updated request
      const updatedRequestsCopy = [...updatedRequests];
      const requestIndex = updatedRequestsCopy.findIndex((request) => request.id === updatedRequest.id);
      updatedRequestsCopy[requestIndex] = updatedRequest;
      setUpdatedRequests(updatedRequestsCopy);
    });
  };

  return (
    <div className="flex flex-col">
      {updatedRequests.map((request) => (
        <div key={request.id} className="border rounded-md p-4 my-2">
          <p>{request.name}</p>
          <p>{request.date}</p>
          <p>{request.purpose}</p>
          <div className="flex mt-2">
            {request.status === 'pending' && (
              <>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleAccept(request.id)}>
                  Accept
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => handleDecline(request.id)}>
                  Decline
                </button>
              </>
            )}
            {request.status === 'accepted' && <p className="text-green-500">Accepted</p>}
            {request.status === 'declined' && <p className="text-red-500">Declined</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestList;
