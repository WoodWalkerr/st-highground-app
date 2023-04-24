import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navigation } from '../data/navbarLinks'
import { useNavigate } from 'react-router-dom'
import { BiLogOutCircle } from '../icons/icons'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const userID = localStorage.getItem('data')
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem('jwt')
        localStorage.removeItem('data')
        setLoggedIn(false)
        navigate('/')
    }

    const handleLogin = () => {
        navigate('/sign-in')
    }

    const handleSignup = () => {
        navigate('/sign-up')
    }

    const jwt = sessionStorage.getItem('jwt')
    const userData = JSON.parse(localStorage.getItem('data'))

    if (jwt && JSON.stringify(userData) !== '{}') {
        if (!loggedIn) {
            setLoggedIn(true)
        }
    }

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

            {loggedIn ? (
                <ul className="list-none ">
                    <li className="flex justify-between items-center px-3 cursor-pointer font-medium tracking-wider hover:scale-100 hover:text-gray-700">
                        <span className="my-4 mr-5 text-lg leading-relaxed uppercase font-semibold">
                            {JSON.parse(userID).name}
                        </span>
                        <button
                            onClick={() => {
                                handleLogout()
                                navigate('/sign-in')
                            }}
                            className="flex justify-center group relative"
                        >
                            {' '}
                            <BiLogOutCircle size={20} className="mr-3" />
                            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 scale-0 rounded bg-gray-100 p-2 text-xs text-gray-600 group-hover:scale-100">
                                Sign out
                            </span>
                        </button>{' '}
                    </li>
                </ul>
            ) : (
                <ul className="list-none flex justify-between items-center">
                    <li className="px-3 cursor-pointer font-medium tracking-wider hover:scale-100 hover:text-gray-700">
                        <button onClick={handleLogin}>Sign in</button>
                    </li>
                    <li className="px-3 cursor-pointer font-medium tracking-wider hover:scale-100 hover:text-gray-700">
                        <button onClick={handleSignup}>Sign up</button>
                    </li>
                </ul>
            )}

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
                    {loggedIn ? (
                        <li className="py-4 text-2xl flex justify-center pt-6 font-medium uppercase tracking-wider hover:text-gray-300">
                            <button
                                className="text-left w-full"
                                onClick={() => {
                                    handleLogout()

                                    setNav(false)
                                }}
                            >
                                Logout
                            </button>
                        </li>
                    ) : (
                        <div className="flex flex-col justify-center pt-6">
                            <li className="py-4 text-2xl flex justify-center font-medium uppercase tracking-wider hover:text-gray-300">
                                <button
                                    className="text-left w-full"
                                    onClick={() => {
                                        handleLogin()
                                        setNav(false)
                                    }}
                                >
                                    Login
                                </button>
                            </li>
                            <li className="py-4 text-2xl flex justify-center font-medium uppercase tracking-wider hover:text-gray-300">
                                <button
                                    className="text-left w-full"
                                    onClick={() => {
                                        handleSignup()
                                        setNav(false)
                                    }}
                                >
                                    Sign Up
                                </button>
                            </li>
                        </div>
                    )}
                    {navigation.map(({ id, link, path }) => (
                        <li
                            className="py-4 text-2xl flex justify-center font-medium uppercase tracking-wider hover:text-gray-300"
                            key={id}
                        >
                            <button
                                className="text-left w-full"
                                onClick={() => {
                                    navigate(path)
                                    setNav(false)
                                }}
                            >
                                {link}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Navbar
