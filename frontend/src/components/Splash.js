import React from 'react'
import { navigation } from '../data/scheduleLiks'
import { useNavigate } from 'react-router-dom'

function Splash() {
    const navigate = useNavigate()

    return (
        <div className="flex justify-center items-center bg-white w-full w-full mx-auto p-5 py-20" style={{
            background: `url(${require('../assets/lake-2.jpg')}) center no-repeat`,
            backgroundSize: 'cover',
            height: '100vh',
        }}>
            
            <div className="text-white py-10">
                <h1 className="text-6xl font-bold text-center mb-8">
                    WELCOME TO HIGHGROUND
                </h1>
                <div className="flex justify-center">
                    {navigation.map(({ id, link, path }) => (
                        <ul className="list-none" key={id}>
                            <li
                                className="px-3 cursor-pointer font-medium tracking-wider hover:scale-100 hover:text-gray-700"
                            >
                                <button
                                    className="bg-black text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
                                    onClick={() => navigate(path)}
                                >
                                    {' '}
                                    {link}
                                </button>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Splash
