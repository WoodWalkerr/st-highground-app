import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function ScheduleBookForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        groupLength: '',
        purpose: '',
    })

    const [formStep, setFormStep] = useState(1)

    const { fullName, email, phoneNumber, date, time, groupLength, purpose } =
        formData

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // Use the formData object for form validation and submission
    }

    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-8">Schedule a Visit</h1>
            {formStep === 1 && (
                <form
                    className="w-[20%]"
                    onSubmit={(e) => {
                        setFormStep(2)
                        e.preventDefault()
                    }}
                >
                    <div className="relative flex flex-col mb-4">
                        <div className="flex items-center border border-gray-400 p-2 rounded-md">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-gray-500 mr-2"
                            />
                            <input
                                type="text"
                                id="full-name"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={handleInputChange}
                                className="flex-1 outline-none bg-gray-100 text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="relative flex flex-col mb-4">
                        <div className="flex items-center border border-gray-400 p-2 rounded-md">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-gray-500 mr-2"
                            />
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleInputChange}
                                className="flex-1 outline-none bg-gray-100 text-gray-700"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <div className="flex items-center border border-gray-400 p-2 rounded-md flex-1">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-gray-500 mr-2"
                            />
                            <input
                                type="text"
                                id="phone"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={handleInputChange}
                                className="flex-1 outline-none bg-gray-100 text-gray-700"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 mt-4"
                        >
                            Next
                        </button>
                    </div>
                </form>
            )}
            {formStep === 2 && (
                <form className="w-[20%]" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col mb-4">
                        <input
                            type="date"
                            id="date"
                            placeholder="Date"
                            value={date}
                            onChange={handleInputChange}
                            className="border border-gray-400 p-2 rounded-md"
                        />
                    </div>
                    <div
                        className="flex flex-col mb-4
"
                    >
                        <input
                            type="time"
                            id="time"
                            placeholder="Time"
                            value={time}
                            onChange={handleInputChange}
                            className="border border-gray-400 p-2 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <input
                            type="number"
                            id="group-length"
                            placeholder="Group Length"
                            value={groupLength}
                            onChange={handleInputChange}
                            className="border border-gray-400 p-2 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <textarea
                            id="purpose"
                            placeholder="Purpose of Visit"
                            value={purpose}
                            onChange={handleInputChange}
                            className="border border-gray-400 p-2 rounded-md"
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 mt-4"
                            onClick={() => setFormStep(1)}
                        >
                            Previous
                        </button>
                        <button
                            type="submit"
                            className="bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 mt-4"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default ScheduleBookForm
