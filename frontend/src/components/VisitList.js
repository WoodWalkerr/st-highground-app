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
        <div className="flex flex-col justify-center items-center h-screen">
            <table className="max-w-6xl shadow-md overflow-hidden rounded-[20px] bg-[#093545] table-auto">
                <thead>
                    <tr>
                        <th
                            colSpan={11}
                            className="text-start pl-10 pb-4 pt-7 text-sm font-light text-gray-300 flex justify-around"
                        >
                            Visit Request
                        </th>
                    </tr>
                    <tr className="bg-[#093545]">
                        <th className="py-10 text-sm font-light text-gray-300">
                            No.
                        </th>

                        <th className="py-10 text-sm font-light flex justify-center items-center text-gray-300">
                            <AiOutlineUser size={15} className="mr-3" />
                            User ID
                        </th>
                        <th className="py-10 text-sm font-light text-gray-300">
                            Date
                        </th>
                        <th className="py-10 text-sm font-light text-gray-300">
                            Time
                        </th>
                        <th className="py-10 text-sm font-light text-gray-300">
                            Purpose
                        </th>
                        <th className="py-10 text-sm font-light text-gray-300">
                            status
                        </th>
                        <th className="py-10 text-sm font-light text-gray-300">
                            status
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
                                    <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                        {visit.user_id}
                                    </td>
                                    <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                        {visit.visit_date}
                                    </td>
                                    <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                        {visit.visit_time}
                                    </td>
                                    <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                        {visit.purpose}
                                    </td>
                                    <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                        {visit.status}
                                    </td>
                                    <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                    <VisitListItem key={visit.user_id} visit={visit} />


                                    {/* visit: {
                                        user_id: '',
                                        status: 'pending'
                                    } */}

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
