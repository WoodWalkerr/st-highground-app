import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { createVisit } from '../services/UserServices'

function ScheduleBookForm() {
    const [formData, setFormData] = useState({
        // fullName: '',
        // email: '',
        // phoneNumber: '',
        visit_date: '',
        visit_time: '',
        purpose: '',
    })


    const { visit_date, visit_time, purpose } = formData

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if ( !visit_date || !visit_time || !purpose) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createVisit(formData)
            window.location = '/'
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="bg-gray-100 text-black h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-8">Schedule a Visit</h1>
            {/* {formStep === 1 && (
                <form className="w-[20%]" onSubmit={() => setFormStep(2)}>
                    <div className="relative flex flex-col mb-4">
                        <div className="flex items-center border border-gray-400 p-2 rounded-md">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-gray-500 mr-2"
                            />
                            <input
                                type="text"
                                id="full-name"
                                name="fullName"
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
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleInputChange}
                                className="flex-1 outline-none bg-gray-100 text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="relative flex flex-col mb-4">
                        <div className="flex items-center border border-gray-400 p-2 rounded-md flex-1">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-gray-500 mr-2"
                            />
                            <input
                                type="text"
                                id="phone"
                                name="phoneNumber"
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

            {formStep === 2 && ( */}
                <form className="w-[20%]" onSubmit={onSubmitForm}>
                    <div className="flex flex-col mb-4">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            placeholder="Date"
                            value={visit_date}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    visit_date: e.target.value,
                                })
                            }
                            className="border border-gray-400 p-2 rounded
              -md outline-none bg-gray-100 text-gray-700 mb-2"
                        />
                    </div>{' '}
                    <div className="flex flex-col mb-4">
                        <input
                            type="time"
                            id="time"
                            name="time"
                            placeholder="Time"
                            value={visit_time}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    visit_time: e.target.value,
                                })
                            }
                            className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <select
                            id="purpose"
                            name="purpose"
                            value={purpose}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    purpose: e.target.value,
                                })
                            }
                            className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                        >
                            <option value="">Select purpose</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 mt-4"
                        >
                            Submit
                        </button>
                    </div>
                </form>
   
        </div>
    )
}

export default ScheduleBookForm
