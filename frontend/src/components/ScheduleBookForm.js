import React, { useState } from 'react'
import { createVisit } from '../services/VisitServices'
import { useNavigate } from 'react-router-dom'
import Modal from '../modal/UsersModal'

function ScheduleBookForm() {
    const userID = localStorage.getItem('data')
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        user_id: JSON.parse(userID).id,
        visit_date: '',
        visit_time: '',
        purpose: '',
    })

    const { user_id, visit_date, visit_time, purpose } = formData

    const navigate = useNavigate()

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!user_id || !visit_date || !visit_time || !purpose) {
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
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <div className=" text-black flex flex-col justify-center max-w-lg items-center pt-10">
            <div className="bg-gray-400 bg-opacity-60 rounded-lg">
                <div className="w-[20%] pt-4 flex flex-row mx-3">
                    <span className="flex justify-center items-center text-white font-semibold text-md text-center mx-5">
                        Schedule a Visit
                    </span>{' '}
                    <input
                        type="hidden"
                        id="id"
                        name="user_id"
                        value={JSON.parse(userID).id}
                    />
                    <div className="flex flex-col mb-4 mx-3 ml-6">
                        <label className='pb-2 text-white' htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="visit_date"
                            value={visit_date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="border border-gray-400 p-2 rounded-md  outline-none bg-gray-100 text-gray-700 mb-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4 mx-3 ml-6">
                        <label className='pb-2 text-white' htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="visit_time"
                            value={visit_time}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md  outline-none bg-gray-100 text-gray-700 mb-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4 mx-3 ml-6">
                        <label className='pb-2 text-white' htmlFor="purpose">Purpose</label>
                        <select
                            id="purpose"
                            name="purpose"
                            value={purpose}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md  outline-none bg-gray-100 text-gray-700 mb-2"
                        >
                            <option value="">Select purpose</option>
                            <option value="Trekking">Trekking</option>
                            <option value="Camping">Camping</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mx-5">
                        <button
                            onClick={onSubmitForm}
                            className="bg-[#66B266] hover:bg-[#66B266] text-white font-bold text-sm px-8 py-3 p mt-1 rounded-[10px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div>
                    <Modal />
                </div>
            )}
        </div>
    )
}

export default ScheduleBookForm
