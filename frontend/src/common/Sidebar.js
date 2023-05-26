import React, { useState } from 'react'
import {
    FiLogOut,
    AiOutlineUser,
    MdOutlineDashboardCustomize,
    HiMenuAlt2,
    IoMdClose,
} from '../icons/icons'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const jwt = sessionStorage.getItem('jwt')
    const userData = JSON.parse(localStorage.getItem('data'))

    let initials = ''
    if (userData && userData.name) {
        initials = userData.name[0].toUpperCase()
    }

    const handleLogout = () => {
        sessionStorage.removeItem('jwt')
        localStorage.removeItem('data')
        setLoggedIn(false)
        navigate('/admin-login')
    }

    if (jwt && JSON.stringify(userData) !== '{}' && !loggedIn) {
        setLoggedIn(true)
    }

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="fixed inset-y-0 left-0 flex flex-col w-64 px-4 py-6 bg-white border-r-2 border-gray-200 shadow-lg shadow-right text-black">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold py-5">HIGHGROUND</h1>

                    <div className="flex flex-col justify-center items-center pb-10 pt-5">
                        <div className="w-10 h-10 text-white rounded-full bg-green-500 font-light flex justify-center items-center">
                            {initials}
                        </div>

                        <div className="text-xs mt-1">Admin</div>
                    </div>

                    <button
                        onClick={handleToggle}
                        className="inline-block md:hidden"
                    >
                        {isOpen ? (
                            <IoMdClose
                                size={24}
                                className="text-black hover:text-gray-200"
                            />
                        ) : (
                            <HiMenuAlt2
                                size={24}
                                className="text-black hover:text-gray-200"
                            />
                        )}
                    </button>
                </div>

                <div className="h-screen pt-12 ">
                    <nav
                        className={`md:block mt-auto ml-5 ${
                            isOpen ? '' : 'hidden'
                        }`}
                    >
                        <button
                            className="flex items-center w-full py-2 text-black"
                            onClick={() => navigate('/visit-request')}
                        >
                            <div className="rounded-md">
                                <MdOutlineDashboardCustomize
                                    size={15}
                                    className="mx-2 my-2 active:bg-[#093545] focus-within:bg-[#093545] rounded-lg"
                                />
                            </div>
                            Dashboard
                        </button>
                        <button
                            className="flex items-center w-full py-2 text-black"
                            onClick={() => navigate('/list-dashboard')}
                        >
                            <div className="rounded-md">
                                <AiOutlineUser
                                    size={15}
                                    className="mx-2 my-2 active:bg-[#093545] focus-within:bg-[#093545] rounded-lg"
                                />
                            </div>
                            List Dashboard
                        </button>
                        <div className="mt-auto">
                            <button
                                onClick={() => {
                                    navigate('/')
                                    handleLogout()
                                }}
                                className="flex items-center w-full py-2 text-black"
                            >
                                <FiLogOut size={15} className="mx-2 my-2" />
                                Logout
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar
