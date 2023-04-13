import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { updateUser } from '../services/UserServices'

const EditDashboard = ({ user }) => {
    const [user_details, setUserDetails] = useState({
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
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(user_details).then(console.log(user_details))
    }

    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <div className="flex justify-center group relative py-4 px-6">
                <button
                    className="rounded-md text-white w-10 h-10 hover:text-blue-300"
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
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-4">
                                    Edit User Information
                                </h2>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name="name"
                                        defaultValue={user.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        defaultValue={user.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="PhoneNumber"
                                        placeholder="Phone Number"
                                        defaultValue={user.PhoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="type"
                                        placeholder="Type"
                                        defaultValue={user.type}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        className="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={(e) => {
                                            handleSubmit(e)
                                            toggleModal()
                                        }}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
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
