import React, { useState, useEffect } from 'react'
import VisitListItem from './VisitStatus'
import { getAllVisits } from '../services/VisitServices'
import { AiOutlineUser } from '../icons/icons'

const VisitList = () => {
    const [visits, setVisits] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllVisits()
                setVisits(data)
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className='py-10 text-2xl font-semibold'>
                Visit List
            </h1>
            <table className="max-w-6xl shadow-md overflow-hidden rounded-[20px] bg-white table-auto">
                <thead>
                    <tr>
                        <th
                            className="text-start bg-white pl-10 pb-4 pt-7 text-sm font-semibold text-gray-600 flex justify-around"
                        >
                            Visit Request
                        </th>
                    </tr>
                    <tr className="bg-white font-semibold text-gray-600">
                        <th className="py-10 text-sm">
                            No.
                        </th>

                        <th className="py-10 text-sm font-semibold flex justify-center items-center text-gray-600">
                            <AiOutlineUser size={15} className="mr-3" />
                            User ID
                        </th>
                        <th className="py-10 text-sm">
                            Date
                        </th>
                        <th className="py-10 text-sm">
                            Time
                        </th>
                        <th className="py-10 text-sm">
                            Purpose
                        </th>
                        <th className="py-10 text-sm">
                            status
                        </th>
                        <th className="py-10 text-sm">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {visits.map(
                        (visit, index) =>
                            visit && (
                                <tr
                                    key={visit.user_id}
                                    className="hover:bg-gray-100 transition-colors text-xs"
                                >
                                    <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                        {visit.user_id}
                                    </td>
                                    <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                        {visit.visit_date}
                                    </td>
                                    <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                        {visit.visit_time}
                                    </td>
                                    <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                        {visit.purpose}
                                    </td>
                                    <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                        {visit.status}
                                    </td>
                                    <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                        <VisitListItem
                                            key={visit.user_id}
                                            visit={visit}
                                        />
                                    </td>
                                </tr>
                            )
                    )}
                </tbody>
            </table>{' '}
        </div>
    )
}

export default VisitList
