import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navigation } from '../data/navbarLinks'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const navigate = useNavigate()

    return (
        <div className="fixed flex items-center w-full h-20 px-4 md:px-12 bg-white text-black z-50">
            <div className="text-start mr-auto">
                <button
                    className="text-2xl ml-3 font-extrabold py-6 text-black bg-clip-text"
                    onClick={() => navigate('/')}
                >
                    HIGHGROUND.
                </button>
            </div>

            {navigation.map(({ id, link, path }) => (
                <ul className="list-none">
                    <li
                        key={id}
                        className="px-3 cursor-pointer font-medium tracking-wider hover:scale-100 hover:text-gray-700"
                    >
                        <button onClick={() => navigate(path)}> {link}</button>
                    </li>
                </ul>
            ))}

            <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? (
                    <FaTimes size={20} onClick={() => setNav(!nav)} />
                ) : (
                    <FaBars size={20} onClick={() => setNav(!nav)} />
                )}
            </div>

            {nav && (
                <ul className="flex flex-col absolute top-0 left-0 w-full h-screen bg-white dark:bg-black text-black dark:text-white ">
                    <div className="text-start mr-auto">
                        <p class="text-2xl ml-3 font-extrabold px-4 md:px-12 py-6 text-white dark:text-black bg-clip-text">
                            HIGHGROUND.
                        </p>
                    </div>
                    <li className="py-4 text-2xl flex justify-center pt-6 font-medium uppercase tracking-wider hover:text-gray-300">
                        <button
                            className="text-left w-full"
                            onClick={() => console.log('Clicked Login')}
                        >
                            Login
                        </button>
                    </li>
                    <li className="py-4 text-2xl flex justify-center font-medium uppercase tracking-wider hover:text-gray-300">
                        <button
                            className="text-left w-full"
                            onClick={() => console.log('Clicked Sign Up')}
                        >
                            Sign Up
                        </button>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Navbar
