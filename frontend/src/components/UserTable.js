import { useEffect, useState } from 'react';
import { getPendingReq } from '../services/PendingRequest';

function PendingRequests() {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPendingRequests() {
      setIsLoading(true);
      try {
        const userID = JSON.parse(localStorage.getItem('data')).id;
        const data = await getPendingReq(userID);
        setPendingRequests(data);
      } catch (error) {
        console.error(error.message);
      }
      setIsLoading(false);
    }

    fetchPendingRequests();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (pendingRequests.length === 0) {
    return <div>You have no pending requests.</div>;
  }

  return (
    <div className="flex flex-col ">
      <h2 className="text-lg text-black font-bold my-5">Pending Requests</h2>
      <div className="max-h-96 overflow-y-auto">
        {pendingRequests.map((request) => (
          <div key={request.id} className="mb-2">
            <div className="bg-green-300 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Visit on {request.visit_date} at {request.visit_time}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{request.purpose}</p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <dl className="flex flex-wrap justify-between gap-x-4">
                  <div className="w-full sm:w-auto">
                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                    <dd className="mt-1 text-sm text-gray-900">{request.status}</dd>
                  </div>
                  <div className="w-full sm:w-auto">
                    <dt className="text-sm font-medium text-gray-500">User</dt>
                    <dd className="mt-1 text-sm text-gray-900">{request.user.name}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingRequests;
