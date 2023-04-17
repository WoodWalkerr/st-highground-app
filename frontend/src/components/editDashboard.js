import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { updateUser } from '../services/UserServices'

const EditDashboard = ({ user }) => {
    const [userDetails, setUserDetails] = useState({
        id: user?.id || '',
        name: user?.name || '',
        email: user?.email || '',
        password: user?.password || '',
        phoneNumber: user?.phoneNumber || '',
        type: user?.type || '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateUser(userDetails)
            window.location.href = '/'
        } catch (error) {
            console.error(error.message)
        }
    }

    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <div className="flex justify-center group relative py-1 px-6">
                <button
                    className="rounded-md text-white hover:text-blue-300"
                    onClick={toggleModal}
                >
                    <FontAwesomeIcon icon={faEdit} />
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 scale-0 rounded bg-gray-300 p-2 text-xs text-black group-hover:scale-100">
                        Edit
                    </span>
                </button>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg">
                            <div className="p-4 ">
                                <h2 className="text-lg font-bold mb-4">
                                    Edit User Information
                                </h2>
                                    <div>
                                        <label
                                            htmlFor="Username"
                                            className="flex text-sm font-medium text-gray-700 justify-start my-3"
                                        >
                                            Username
                                        </label>
                                        <input
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            name="name"
                                            type="text"
                                            placeholder="Username"
                                            value={userDetails.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="flex text-sm font-medium text-gray-700 justify-start my-3"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={userDetails.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="flex text-sm font-medium text-gray-700 justify-start my-3"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            name="phoneNumber"
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={userDetails.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex justify-between pt-3">
                                        <button
                                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={(e) => {
                                                handleSubmit(e)
                                                toggleModal()
                                            }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={toggleModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default EditDashboard
