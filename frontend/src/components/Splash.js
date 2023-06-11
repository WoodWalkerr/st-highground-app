import React, { useState, useEffect } from 'react'
import ScheduleBookForm from './ScheduleBookForm'
import Tabs from '../common/Tabs'

function Splash() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const isFirstRun = localStorage.getItem('data')
        if (!isFirstRun) {
            localStorage.clear()
            localStorage.setItem('data', true)
        }

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

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <div
            className="flex justify-center items-center bg-white max-w-full mx-auto p-5 py-20"
            name="Home"
            style={{
                background: `url(${require('../assets/background.jpeg')}) center no-repeat`,
                backgroundSize: 'cover',
                height: '100vh',
            }}
        >
            {/* <div className="flex justify-end items-end">
                <div
                    class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                >
                    <span class="font-medium">Success alert!</span> Login
                    Successfully!
                </div>
            </div> */}
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
                                className="border-2 text-white font-semibold hover:bg-gray-200 hover:text-black py-2 px-4 rounded-lg"
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
                        <Tabs onClose={handleModalClose} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Splash
