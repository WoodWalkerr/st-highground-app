import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navigation } from '../data/navbarLinks'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from '../icons/icons'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const userID = localStorage.getItem('data')
    const navigate = useNavigate()



    const handleLogin = () => {
        navigate('/sign-in')
    }

    const handleSignup = () => {
        navigate('/sign-up')
    }

    const jwt = sessionStorage.getItem('jwt')
    const userData = JSON.parse(localStorage.getItem('data'))
    
    const handleLogout = () => {
        sessionStorage.removeItem('jwt')
        localStorage.removeItem('data')
        setLoggedIn(false)
        navigate('/')
    }
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navbarClass =
        scrollPosition > 50
            ? 'bg-white text-[#4CAF50]'
            : 'bg-transparent text-white'

    if (jwt && JSON.stringify(userData) !== '{}') {
        if (!loggedIn) {
            setLoggedIn(true)
        }
    }

    return (
        <div
            className={`fixed overflow-hidden flex justify-between w-full h-20 px-4 md:px-12 z-3 transition-colors duration-300 ${navbarClass}`}
        >
            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <button
                        className={`text-lg ml-3 font-extrabold py-6 bg-clip-text ${navbarClass}`}
                        onClick={() => navigate('/')}
                    >
                        HIGHGROUND.
                    </button>

                    {loggedIn ? (
                        <ul className="list-none">
                            <li className="flex justify-between items-center px-3 cursor-pointer font-medium tracking-wider">
                                <span className="my-4 mr-5 text-sm leading-relaxed capitalize font-semibold">
                                    {JSON.parse(userID).name}
                                </span>
                                <button
                                    onClick={() => {
                                        handleLogout()
                                        navigate('/sign-in')
                                    }}
                                    className="flex text-sm justify-center px-2"
                                >
                                    {' '}
                                    Sign out
                                    <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 scale-0 rounded bg-gray-100 p-2 text-xs text-gray-600 group-hover:scale-100">
                                Sign out
                            </span>
                                </button>{' '}
                            </li>
                        </ul>
                    ) : (
                        <ul className="list-none flex justify-between items-center">
                            <li className="px-3 cursor-pointer font-medium tracking-wider hover:scale-100 hover:text-gray-700">
                                <button
                                    className="uppercase text-sm flex justify-center items-center"
                                    onClick={handleLogin}
                                > <FaUserCircle size={20} className='mr-2'/>
                                    Sign in
                                </button>
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
            </div>
        </div>
    )
}

export default Navbar
