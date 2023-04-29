import React, { useState } from 'react'
import { createUser } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const InputDashboard = () => {
    const navigate = useNavigate()
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
        <div className=" flex flex-col justify-center items-center min-h-screen bg-gray-100 py-5 sm:px-6 lg:px-8">
            <div className="bg-white flex justify-center items-center max-w-xs py-5 px-4 border border-gray-400 rounded-md shadow sm:rounded-lg sm:px-10">
                <form className="space-y-4 " onSubmit={onSubmitForm}>
                    <h2 className="text-xl text-start font-bold mb-5">
                        Sign Up
                    </h2>
                    <div>
                        <input
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
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <input
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
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    password: e.target.value,
                                })
                            }
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <input
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
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text- font-medium text-white bg-[#4CAF50] hover:bg-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                        <div className="block text-center text-gray-500 text-sm font-bold mb-2">
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
    )
}

export default InputDashboard
