import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { createVisit } from '../services/VisitServices'
import { useNavigate } from 'react-router-dom'
import Modal from '../modal/UsersModal'

function ScheduleBookForm() {
    const userID = localStorage.getItem('data')
    const [showModal, setShowModal] = useState(false)
    const [formStep, setFormStep] = useState(1)
    const [formData, setFormData] = useState({
        Fullname: JSON.parse(userID).name,
        email: JSON.parse(userID).email,
        phone_number: JSON.parse(userID).phone_number,
        user_id: JSON.parse(userID).id,
        visit_date: '',
        visit_time: '',
        purpose: '',
    })

    const {
        Fullname,
        email,
        phone_number,
        user_id,
        visit_date,
        visit_time,
        purpose,
    } = formData

    const navigate = useNavigate()

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (
            !Fullname ||
            !email ||
            !phone_number ||
            !user_id ||
            !visit_date ||
            !visit_time ||
            !purpose
        ) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createVisit(formData)
            setShowModal(true)
            setTimeout(() => navigate('/'), 10000)
        } catch (error) {
            console.error(error.message)
        }
    }
    const handlePrevious = () => {
        setFormStep(formStep - 1)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <div className="bg-gray-100 text-black h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-8">Schedule a Visit</h1>
            {formStep === 1 && (
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
                                value={JSON.parse(userID).name}
                                onChange={handleChange}
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
                                value={JSON.parse(userID).email}
                                onChange={handleChange}
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
                                value={JSON.parse(userID).phone_number}
                                onChange={handleChange}
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
                <form className="w-[20%] " onSubmit={onSubmitForm}>
                    <div className="flex flex-col mb-4 hidden">
                        <input
                            type="id"
                            id="id"
                            name="user_id"
                            placeholder="id"
                            value={JSON.parse(userID).id}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <input
                            type="date"
                            id="date"
                            name="visit_date"
                            placeholder="Date"
                            value={visit_date}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <input
                            type="time"
                            id="time"
                            name="visit_time"
                            placeholder="Time"
                            value={visit_time}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <select
                            id="purpose"
                            name="purpose"
                            value={purpose}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                        >
                            <option value="">Select purpose</option>
                            <option value="Trekking">Trekking </option>
                            <option value="Camping">Camping </option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={handlePrevious}
                            className="bg-gray-900 text-white active:bg-blue-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                            Previous
                        </button>
                        <button
                            onClick={onSubmitForm}
                            className="bg-gray-900 text-white active:bg-blue-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}
            {showModal && (
                <div>
                    <Modal />
                </div>
            )}
        </div>
    )
}

export default ScheduleBookForm
