import React, { useState } from 'react'
import { BiHappy } from 'react-icons/bi'

function Modal() {
    const userID = localStorage.getItem('data')
    const [showModal, setShowModal] = useState(true)

    const handleOkClick = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Hi{' '}
                                    <span className="my-4 text-3xl leading-relaxed capitalize">
                                        {JSON.parse(userID).name}
                                    </span>
                                </h3>
                            </div>
                            <div className="relative flex flex-wrap justify-between p-6">
                                <p className="text-gray-800 text-md leading-relaxed flex-grow pt-5">
                                    Your visit schedule is pending for approval.<br></br>You will receive an email once confirmed.
                                </p>
                                <div className="flex items-center justify-end flex-grow-0">
                                    <BiHappy
                                        size={100}
                                        className="text-gray-800"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-gray-800 text-white hover:bg-gray-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleOkClick}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            )}
        </>
    )
}

export default Modal
