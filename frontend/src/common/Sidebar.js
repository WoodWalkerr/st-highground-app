import React, { useState } from 'react'
import {
    BiLogOutCircle,
    AiOutlineUser,
    MdOutlineDashboardCustomize,
    HiMenuAlt2,
    IoMdClose,
} from '../icons/icons'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)


    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="fixed inset-y-0 left-0 flex flex-col w-64 px-4 py-6 bg-gray-100 text-black">
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
                    <a
                        href="#"
                        className="flex items-center py-2 text-black hover:text-gray-700"
                    >
                        <MdOutlineDashboardCustomize
                            size={20}
                            className="mr-3"
                        />
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="flex items-center py-2 text-black hover:text-gray-700"
                    >
                        <AiOutlineUser size={20} className="mr-3" />
                        Visit Request
                    </a>
                    <a
                        href="#"
                        className="flex items-center py-2 text-black hover:text-gray-700"
                    >
                        <BiLogOutCircle size={20} className="mr-3" />
                        Logout
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
