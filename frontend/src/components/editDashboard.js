import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { updateUser } from '../services/UserServices'

const EditDashboard = ({ user }) => {
    const [userDetails, setUserDetails] = useState({
        id: user?.id || '',
        name: user?.name || '',
        email: user?.email || '',
        password: user?.password || '',
        phone_number: user?.phone_number || '',
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
            window.location.href = '/list-dashboard'
        } catch (error) {
            console.error(error.message)
        }
    }
    
      useEffect(() => {
        const saveChanges = async () => {
          try {
            await updateUser(userDetails);
          } catch (error) {
            console.error(error.message);
          }
        };
    
        saveChanges();
      }, [userDetails]);

    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

return (
<div>
    <div className="flex justify-center group relative py-1 px-10">
        <button
            className="rounded-md text-gray-500 hover:text-text-gray-700"
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
                <div className="bg-white rounded-lg shadow-xl">
                    <div className="p-6">
                        <h2 className="text-lg font-bold mb-4 text-center text-gray-700">
                            Edit User Information
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="Username"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Username
                                </label>
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    name="name"
                                    type="text"
                                    placeholder="Username"
                                    value={userDetails.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={userDetails.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    name="phone_number"
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={userDetails.phone_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-center mt-6">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={(e) => {
                                        handleSubmit(e)
                                        toggleModal()
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>

    )
}

export default EditDashboard
