import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTab from '../common/PageTab'
import PendingRequest from '../components/PendingRequest'
import ActiveRequest from '../components/AcceptedRequest'


const Tabs = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('Pending')
    const tabs = ['Pending', 'Accepted']
    const navigate = useNavigate()

    const handleClose = () => {
        onClose(navigate('/'))
    }


    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex">
            <div className="relative p-8 bg-white w-full max-w-sm m-auto flex-col flex rounded-lg">
                <h1 className="mb-2 text-2xl ml-3 text-black">
                    Scheduled Visits
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
                </h1>

                <div className="my-6 mx-auto">
                    <PageTab
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onClose={handleClose}
                        className="border-b-2  hover:border-b-green-500"
                    />
                    {activeTab === 'Pending' && <PendingRequest />}
                    {activeTab === 'Accepted' && <ActiveRequest />}
                </div>
            </div>
        </div>
    )
}

export default Tabs
