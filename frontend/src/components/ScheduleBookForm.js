import React, { useState, useEffect } from 'react'
import { createVisit, getVisitsForUserAndDate } from '../services/VisitServices'
import Modal from '../modal/UsersModal'

function ScheduleBookForm() {
    const userID = localStorage.getItem('data')
    const [showModal, setShowModal] = useState(false)
    const [availableVisits, setAvailableVisits] = useState(0)
    const [dateClicked, setDateClicked] = useState(false)

    const [formData, setFormData] = useState({
        user_id: userID ? JSON.parse(userID).id : '',
        visit_date: '',
        visit_time: '',
        purpose: '',
    })

    const { user_id, visit_date, visit_time, purpose } = formData

    const MAX_VISITS_PER_DAY = 3

    useEffect(() => {
        const fetchAvailableVisits = async () => {
            const visits = await getVisitsForUserAndDate(user_id, visit_date)
            const count = MAX_VISITS_PER_DAY - visits.length
            setAvailableVisits(count)
        }
        if (visit_date) {
            fetchAvailableVisits()
        }
    }, [user_id, visit_date])

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!user_id || !visit_date || !visit_time || !purpose) {
            alert('Please fill in all fields')
            return
        }
        const selectedTime = new Date(`${visit_date}T${visit_time}`)
        const openingTime = new Date(`${visit_date}T06:00`)
        const closingTime = new Date(`${visit_date}T17:00`)
        if (selectedTime < openingTime || selectedTime > closingTime) {
            alert('Booking is only available between 6am and 5pm')
            return
        }

        if (availableVisits <= 0) {
            alert(
                `Sorry, the maximum number of visits has already been reached for this day. Please choose another date.`
            )
            return
        } else if (availableVisits === 1) {
            alert(
                `There is only one slot available for this day. Please book your visit as soon as possible`
            )
        }

        try {
            await createVisit(formData)
            setShowModal(true)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <div className=" text-black flex flex-col justify-center max-w-lg items-center">
            <div className="bg-gray-400 bg-opacity-40 rounded-lg">
                <div className="w-[20%] pt-4 flex flex-row mx-3">
                    <span className="flex justify-center items-center text-white font-semibold text-md text-center mx-5 uppercase">
                        Schedule a Visit
                    </span>{' '}
                    {/* <div className="mb-4 mx-3 ml-6 hidden">
                        <label className="pb-2 text-white" htmlFor="id">
                            ID
                        </label>
                        <input
                            type="id"
                            id="id"
                            name="id"
                            value={userID ? JSON.parse(userID).id : ''}
                        />
                    </div> */}
                    <div className="flex flex-col mb-4 mx-3 ml-6">
                        <label
                            className="pb-2 text-xs text-white"
                            htmlFor="date"
                        >
                            Date{' '}
                            {dateClicked && (

                            <span className="text-black bg-gray-200 px-2 rounded-full">
                                {availableVisits > 0
                                    ? `${availableVisits} visits available`
                                    : 'visits available 0'}
                            </span>
                            )}
                        </label>
                        <input
                            className="py-2 px-3 rounded-lg bg-gray-200"
                            
                            type="date"
                            id="date"
                            name="visit_date"
                            value={visit_date}
                            onChange={handleChange}
                            min={new Date().toISOString().slice(0, 10)}
                            onClick={() => setDateClicked(true)}
                        />
                    </div>
                    <div className="flex flex-col mb-4 mx-3 ml-6">
                        <label
                            className="pb-2 text-xs text-white"
                            htmlFor="time"
                        >
                            Time
                        </label>
                        <input
                            type="time"
                            id="time"
                            name="visit_time"
                            value={visit_time}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md  outline-none bg-gray-200 text-gray-700 mb-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4 mx-3 ml-6">
                        <label
                            className="pb-2 text-xs text-white"
                            htmlFor="purpose"
                        >
                            Purpose
                        </label>
                        <select
                            id="purpose"
                            name="purpose"
                            value={purpose}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-md  outline-none bg-gray-200 text-gray-700 mb-2"
                        >
                            <option className="Select Purpose">Select purpose</option>
                            <option value="Trekking">Trekking</option>
                            <option value="Camping">Camping</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mx-5">
                        {/* {alertMessage & <div> {alertMessage} </div>} */}
                        <button
                            onClick={onSubmitForm}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-8 py-2 mb-2 rounded-[10px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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
