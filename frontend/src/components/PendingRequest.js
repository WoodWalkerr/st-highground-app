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
      <div className="my-2"></div>
      <div className="max-h-96 overflow-y-auto rounded-lg">
        {pendingRequests.map((request) => (
          <div key={request.id} className="mb-2">
            <div className="bg-green-300 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-md leading-6 font-medium text-gray-700">
                  Visit on {request.visit_date} at {request.visit_time}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-900">{request.purpose}</p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <dl className="flex flex-wrap justify-between gap-x-4">
                  <div className="w-full sm:w-auto">
                    <dt className="text-sm font-medium text-gray-900">Status</dt>
                    <dd className="mt-1 text-sm text-gray-900">{request.status}</dd>
                  </div>
                  <div className="w-full sm:w-auto">
                    <dt className="text-sm font-medium text-gray-900">User</dt>
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

// import { useEffect, useState } from 'react';
// import { getRequestsByStatus } from '../services/Requests';

// function Requests() {
//   const [pendingRequests, setPendingRequests] = useState([]);
//   const [acceptedRequests, setAcceptedRequests] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     async function fetchRequests() {
//       setIsLoading(true);
//       try {
//         const userID = JSON.parse(localStorage.getItem('data')).id;
//         const pendingRequests = await getRequestsByStatus(userID, 'pending');
//         const acceptedRequests = await getRequestsByStatus(userID, 'accepted');
//         setPendingRequests(pendingRequests);
//         setAcceptedRequests(acceptedRequests);
//       } catch (error) {
//         console.error(error.message);
//       }
//       setIsLoading(false);
//     }

//     fetchRequests();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (pendingRequests.length === 0 && acceptedRequests.length === 0) {
//     return <div>You have no requests.</div>;
//   }

//   return (
//     <div className="flex flex-col ">
//       {pendingRequests.length > 0 && (
//         <div className="my-2">
//           <h2 className="text-md font-medium text-gray-700 mb-2">Pending Requests</h2>
//           <div className="max-h-96 overflow-y-auto rounded-lg">
//             {pendingRequests.map((request) => (
//               <div key={request.id} className="mb-2">
//                 {/* Render pending request */}
                
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {acceptedRequests.length > 0 && (
//         <div className="my-2">
//           <h2 className="text-md font-medium text-gray-700 mb-2">Accepted Requests</h2>
//           <div className="max-h-96 overflow-y-auto rounded-lg">
//             {acceptedRequests.map((request) => (
//               <div key={request.id} className="mb-2">
//                 {/* Render accepted request */}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Requests;
