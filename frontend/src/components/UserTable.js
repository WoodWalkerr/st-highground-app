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
    <div className="flex flex-col">
      <h2 className="text-lg font-bold mb-2">Pending Requests</h2>
      <ul className="space-y-2">
        {pendingRequests.map((request) => (
          <li key={request.id}>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Visit on {request.visit_date} at {request.visit_time}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{request.purpose}</p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                    <dd className="mt-1 text-sm text-gray-900">{request.status}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">User</dt>
                    <dd className="mt-1 text-sm text-gray-900">{request.user.name}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PendingRequests;




// import React, { useState } from "react";
// import classNames from "classnames";

// const tabs = ["Pending", "Completed"];

// const data = [
//   { id: 1, name: "Task 1", status: "Pending" },
//   { id: 2, name: "Task 2", status: "Pending" },
//   { id: 3, name: "Task 3", status: "Completed" },
//   { id: 4, name: "Task 4", status: "Pending" },
//   { id: 5, name: "Task 5", status: "Completed" },
// ];

// const Table = () => {
//   const [activeTab, setActiveTab] = useState("Pending");

//   const filteredData = data.filter((item) => item.status === activeTab);

//   return (
//     <div>
//       <div className="flex mb-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={classNames(
//               "py-2 px-4 text-sm rounded-md mr-4",
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-800"
//             )}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id}>
//               <td className="border px-4 py-2">{item.id}</td>
//               <td className="border px-4 py-2">{item.name}</td>
//               <td className="border px-4 py-2">{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

// import React, { useState } from "react";
// import classNames from "classnames";

// const tabs = ["Pending", "Completed"];

// const data = [
//   { id: 1, name: "Task 1", status: "Pending" },
//   { id: 2, name: "Task 2", status: "Pending" },
//   { id: 3, name: "Task 3", status: "Completed" },
//   { id: 4, name: "Task 4", status: "Pending" },
//   { id: 5, name: "Task 5", status: "Completed" },
// ];

// const Table = () => {
//   const [activeTab, setActiveTab] = useState("Pending");

//   const filteredData = data.filter((item) => item.status === activeTab);

//   return (
//     <div>
//       <div className="flex mb-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={classNames(
//               "py-2 px-4 text-sm rounded-md mr-4",
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-800"
//             )}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id}>
//               <td className="border px-4 py-2">{item.id}</td>
//               <td className="border px-4 py-2">{item.name}</td>
//               <td className="border px-4 py-2">{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;