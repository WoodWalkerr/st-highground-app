import React, { Fragment, useState } from 'react'
import { createUser } from '../services/UserServices'

const InputDashboard = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        type: '',
    })

    const { name, email, password, phone_number, type } = user

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!name || !email || !password || !phone_number || !type) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createUser(user)
            window.location = '/'
        } catch (error) {
            console.error(error.message)
        }
    }
        return (
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        {/* <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        /> */}
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={onSubmitForm}>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Username
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="current-name"
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="UserName"
                                    value={name}
                                    onChange={(e) =>
                                        setUser({ ...user, name: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="current-email"
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) =>
                                        setUser({ ...user, email: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="mobile-Number"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Mobile Number
                                </label>
                                <input
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    type="tel"
                                    autoComplete="current-mobileNumber"
                                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Mobile Number"
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
                                <label
                                    htmlFor="type"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Type
                                </label>
                                <input
                                    id="type"
                                    name="type"
                                    type="type"
                                    autoComplete="current-type"
                                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Type"
                                    value={type}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            type: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default InputDashboard
