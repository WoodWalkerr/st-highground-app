import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTab from '../common/PageTab';
import UserTable from '../components/UserTable';

const Tabs = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Pending Requests');
  const tabs = ['Pending', 'Accepted', 'Completed'];
  const navigate = useNavigate();

  const handleClose = () => {
    onClose(navigate('/'));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
          onClick={handleClose}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="my-6 mx-auto border-b-2 border-green-500">
          <PageTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} onClose={handleClose} />
          {activeTab === 'Pending' && <UserTable />}
          {activeTab === 'Accepted' && <div>Content for Accepted</div>}
          {activeTab === 'Completed' && <div>Content for Completed</div>}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
