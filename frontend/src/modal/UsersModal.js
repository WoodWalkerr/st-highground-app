import React, { useState } from 'react'

function Modal() {
    const [showModal, setShowModal] = useState(true)

    const handleOkClick = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="relative bg-white rounded-lg w-80">
                            <div className="flex items-center justify-center bg-green-500 rounded-t-lg py-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-10.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 11.586l4.293-4.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            <div className="px-4 py-6 text-center">
                                <h2 className="text-lg font-bold mb-2">
                                    Thank You!
                                </h2>
                                <p className="text-gray-700">
                                    Your visit schedule is pending for approval.
                                    You will receive an email once confirmed.
                                </p>
                            </div>

                            <div className="px-4 py-3 bg-gray-100 rounded-b-lg text-right">
                                <button
                                    onClick={handleOkClick}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded"
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="opacity-25 fixed inset-0 z-40 bg-gray-50"></div>
            )}
        </>
    )
}

export default Modal
