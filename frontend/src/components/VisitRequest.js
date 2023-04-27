import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineUser } from '../icons/icons'
import EditDashboard from './EditDashboard'
import ReactPaginate from 'react-paginate'
import { getAllVisits, deleteVisit } from '../services/VisitServices'

const VisitRequest = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 10
    const pageCount = Math.ceil(users.length / itemsPerPage)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const startIndex = currentPage * itemsPerPage + 1
    const endIndex = startIndex + itemsPerPage

    const currentData = (users || []).slice(
        startIndex,
        Math.min(endIndex, users.length)
    )

    const handleDeclineReq = async (id) => {
        try {
            const success = await deleteVisit(id)
            if (success) {
                setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id))
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getAllVisits()
                setUsers(fetchedUsers)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchUsers()
    }, [])
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
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
                    <tr className=" bg-[#093545]">
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
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((user, index) => (
                        <tr
                            key={user.id}
                            className="hover:bg-gray-100 transition-colors text-xs"
                        >
                            <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                {startIndex + index}
                            </td>
                            <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                {user.user_id}
                            </td>
                            <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                {user.visit_date}
                            </td>
                            <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                {user.visit_time}
                            </td>
                            <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                {user.purpose}
                            </td>

                            <td className="bg-[#093545] text-center">
                                <EditDashboard user={user} />
                            </td>
                            <td className="bg-[#093545] text-center relative">
                                <td className="flex justify-center group relative py-2 px-10">
                                    <button
                                        className="text-white hover:text-red-500"
                                        onClick={() =>
                                            handleDeclineReq(user.id)
                                        }
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 scale-0 rounded bg-gray-300 p-2 text-xs text-black group-hover:scale-100">
                                            Delete
                                        </span>
                                    </button>
                                </td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>{' '}
            <div class="flex justify-center mt-4">
                <nav class="bg-gray-100 rounded-lg shadow-md p-3">
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={10}
                        containerClassName={
                            'flex flex-wrap items-center justify-center overflow-hidden'
                        }
                        pageClassName={
                            'flex items-center justify-center w-8 h-8 mx-1 text-sm font-medium text-gray-700 bg-white border rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out'
                        }
                        activeClassName={'text-blue-700 bg-blue-500 rounded-md'}
                        previousClassName={
                            'px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-l-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out'
                        }
                        nextClassName={
                            'px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out'
                        }
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        onPageChange={handlePageClick}
                    />
                </nav>
            </div>
        </div>
    )
}

export default VisitRequest
