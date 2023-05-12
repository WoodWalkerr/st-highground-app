import React, { useState } from 'react'
import { userLogin } from '../services/UserLoginServices'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from '../icons/icons'

function UserLogin() {
    const navigate = useNavigate()
    const initialUserData = { email: '', password: '' }
    const [userData, setUserData] = useState(initialUserData)
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            userLogin(userData).then((res) => {
                if (JSON.stringify(res) !== '{}') {
                    sessionStorage.setItem('jwt', res[1].jwt)
                    localStorage.setItem('data', JSON.stringify(res[0]))

                    const secret = localStorage.getItem('data')
                    console.log('secreto para bibo', JSON.parse(secret))
                    navigate('/', { state: res })
                } else {
                    console.log('User does not exist!')
                }
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const handleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-5 sm:px-6 lg:px-8">
            <div className="bg-gray-100 py-20">
                <div className="mx-auto max-w-xs shadow-lg rounded-lg">
                    <div className="p-6 rounded-lg">
                        <h2 className="text-2xl text-start font-bold mb-5">
                            Sign In
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 ">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4 relative">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <button
                                    className="absolute top-0 right-0 mt-4 mr-4 focus:outline-none"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? (
                                        <AiOutlineEye
                                            style={{ opacity: 0.5 }}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            style={{ opacity: 0.5 }}
                                        />
                                    )}
                                </button>
                            </div>

                            <div className="mb-6">
                                <button
                                    className="w-full text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-600 transition duration-200 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="block text-center text-gray-500 text-sm font-bold mb-2">
                                Don't have an account?
                                <button
                                    className="text-[#093545]"
                                    onClick={() => navigate('/sign-up')}
                                >
                                    Sign up.
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserLogin
