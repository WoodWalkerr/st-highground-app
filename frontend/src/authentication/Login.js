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
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-5 sm:px-6 lg:px-8">
            <div class="bg-gray-100 py-20">
                <div class="mx-auto max-w-xs shadow-lg rounded-lg">
                    <div class="p-6 rounded-lg">
                        <h2 class="text-2xl text-start font-bold mb-5">
                            Sign In
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-4 ">
                                <input
                                    class="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="mb-4 relative">
                                <input
                                    class="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <button
                                    class="absolute top-0 right-0 mt-4 mr-4 focus:outline-none"
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

                            <div class="mb-6">
                                <button
                                    class="w-full bg-[#4CAF50] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div class="block text-center text-gray-500 text-sm font-bold mb-2">
                                Don't have an account?
                                <button
                                    class="text-[#093545]"
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
