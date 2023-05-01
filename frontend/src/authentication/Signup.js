import React, { useState } from 'react'
import { createUser } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from '../icons/icons'

const InputDashboard = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
    })

    const { name, email, password, phone_number } = user

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!name || !email || !password || !phone_number) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createUser(user)
            window.location = '/sign-in'
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-5 sm:px-6 lg:px-8">
            <div className="bg-gray-100 py-20">
                <div className="mx-auto max-w-xs shadow-lg rounded-lg">
                    <div className="p-6 rounded-lg">
                        <h2 className="text-2xl text-start pb-3 font-bold mb-5">
                            Sign Up
                        </h2>
                        <form className="space-y-4 " onSubmit={onSubmitForm}>
                            <div className="mb-4 ">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                    id="Username"
                                    name="Username"
                                    type="Username"
                                    autoComplete="Username"
                                    placeholder="Username"
                                    required
                                    value={name}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="mb-4 ">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="John@gmail.com"
                                    required
                                    value={email}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="mb-4 relative">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        })
                                    }
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

                            <div className="mb-4 ">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                    id="phone_number"
                                    name="phone_number"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="Phone Number"
                                    required
                                    value={phone_number}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            phone_number: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#4CAF50] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Sign Up
                                </button>
                                <div className="block text-center text-gray-500 text-sm font-bold my-3 mx-2">
                                    Already have an account?
                                    <button
                                        className="text-[#093545]"
                                        onClick={() => navigate('/sign-in')}
                                    >
                                        Sign in.
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputDashboard
