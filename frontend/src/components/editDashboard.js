import React, { Fragment, useState } from 'react'

const EditDashboard = ({ user }) => {
    const [users, setUser] = useState(user?.users || '')

    // edit description
    const updateUser = async (e) => {
        e.preventDefault()
        try {
            const body = { users }
            const response = await fetch(
                `http://localhost:8080/api/v1/users/${user.id}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                }
            )

            window.location = '/'
        } catch (error) {
            console.error(error.message)
        }
    }

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
        setUser(user?.id || '')
    }

    return (
        <Fragment>
            {/* Button to open the modal */}
            <div className="flex justify-center items-center py-4 mx-10">
                <button
                    className="bg-green-500 rounded-md text-white w-20 h-10 from-green-500 to-green-800 font-normal"
                    onClick={toggleModal}
                >
                    Edit
                </button>
            </div>

            {/* Modal code */}
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-4">
                                    Edit users
                                </h2>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Edit here"
                                        value={users}
                                        onChange={(e) =>
                                            setUser(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={(e) => {
                                        toggleModal()
                                        updateUser(e)
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={toggleModal}
                                    onChange={() => setUser(user.id)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
export default EditDashboard
