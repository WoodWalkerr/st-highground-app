import React, { useState, useEffect } from 'react'
import ScheduleBookForm from './ScheduleBookForm'
import UserTable from './UserTable'

function Splash() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('data')
        if (token) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    const handlePendingRequestsClick = () => {
        setShowModal(true)
    }

    return (
        <div
            className="flex justify-center items-center bg-white w-full mx-auto p-5 py-20"
            style={{
                background: `url(${require('../assets/lake-2.jpg')}) center no-repeat`,
                backgroundSize: 'cover',
                height: '100vh',
            }}
        >
            <div className="flex flex-col text-white mt-12 pt-20">
                <h1 className="text-5xl flex flex-col font-bold text-center">
                    WELCOME TO HIGHGROUND
                    <span className="text-2xl font-normal text-gray-100 mt-5">
                        Take a hike, book a site
                    </span>
                </h1>

                <div className="flex flex-col justify-center items-center mt-12">
                    {isLoggedIn && (
                        <div className="flex justify-center items-center">
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                                onClick={handlePendingRequestsClick}
                            >
                                Scheduled Visits
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex flex-col justify-center items-center mt-12">
                    {<ScheduleBookForm />}
                </div>
                {showModal && (
                <div>
                    <UserTable />
                </div>
            )}
            </div>
        </div>
    )
}

export default Splash
