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
        <Fragment>
            <h1 className="text-center font-bold text-4xl bg-blue-300">
                Sign-Up
            </h1>
            <div className="flex justify-center items-center bg-blue-300">
                <form
                    className="flex flex-col w-[40%] justify-center my-5 bg-blue-300"
                    onSubmit={onSubmitForm}
                >
                    <input
                        type="text"
                        className="py-2 px-3 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Name"
                        value={name}
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                    />
                    <input
                        type="email"
                        className="py-2 px-3 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        className="py-2 px-3 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Password"
                        value={password}
                        // {showPassword ? 'Hide' : 'Show'}

                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    <input
                        type="tel"
                        className="py-2 px-3 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Phone Number"
                        value={phone_number}
                        onChange={(e) =>
                            setUser({ ...user, phone_number: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        className="py-2 px-3  my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Type"
                        value={type}
                        onChange={(e) =>
                            setUser({ ...user, type: e.target.value })
                        }
                    />
                    <button className="py-2 px-4 my-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Submit
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default InputDashboard
