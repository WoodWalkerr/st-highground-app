import React, { useState } from 'react'
import {
    BiLogOutCircle,
    AiOutlineUser,
    MdOutlineDashboardCustomize,
    HiMenuAlt2,
    IoMdClose,
} from '../icons/icons'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="fixed inset-y-0 left-0 flex flex-col w-64 px-4 py-6 bg-white border-r-2 border-gray-200 shadow-lg shadow-right text-black">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">HIGHGROUND</h1>
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
                <nav className={`md:block ${isOpen ? '' : 'hidden'}`}>
                    <button
                        onClick={() => navigate('/list-dashboard')}
                        className="flex items-center w-full text-black active:bg-[#093545] active:text-white focus-within:bg-[#093545] focus-within:text-white hover:text-white pl-4 hover:bg-[#093545] rounded-full py-3"
                    >
                        <MdOutlineDashboardCustomize
                            size={20}
                            className="mr-3"
                        />
                        Dashboard
                    </button>
                    <button
                        className="flex items-center w-full text-black active:bg-[#093545] active:text-white focus-within:bg-[#093545] focus-within:text-white hover:text-white pl-4 hover:bg-[#093545] rounded-full py-3"
                        onClick={() => navigate('/visit-request')}
                    >
                        <AiOutlineUser size={20} className="mr-3" />
                        Visit Request
                    </button>
                    <button
                        onClick={() => navigate('/visit-request')}
                        className="flex items-center w-full text-black active:bg-[#093545] active:text-white focus-within:bg-[#093545] focus-within:text-white hover:text-white pl-4 hover:bg-[#093545] rounded-full py-3"
                    >
                        <BiLogOutCircle size={20} className="mr-3" />
                        Logout
                    </button>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
