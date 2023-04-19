import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import EditDashboard from './EditDashboard'
import ReactPaginate from 'react-paginate'
import { getUsers, deleteUser } from '../services/UserServices'

const ListDashboard = () => {
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

    const handleDeleteUser = async (id) => {
        try {
            const success = await deleteUser(id)
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
                const fetchedUsers = await getUsers()
                setUsers(fetchedUsers)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="h-screen max-w-6xl md:min-w-min mx-auto bg-white px-4 py-20">
            <div className="flex justify-center items-center uppercase my-5 text-xl sm:text-2xl text-gray-700">
                <h1 className="font-bold  tracking-wider">List Dashboard</h1>
            </div>
            <table className="max-w-6xl mx-auto border-collapse border border-gray-200 shadow-md rounded-md">
                <thead>
                    <tr className="bg-[#eaf0f7]">
                        <th className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700">
                            No.
                        </th>

                        <th className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700">
                            Name
                        </th>
                        <th className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700">
                            Email
                        </th>
                        <th className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700">
                            Phone Number
                        </th>
                        <th className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700">
                            Type
                        </th>
                        <th
                            colSpan={2}
                            className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((user, index) => (
                        <tr
                            key={user.id}
                            className="hover:bg-gray-100 transition-colors text-xs"
                        >
                            <td className="border border-gray-500 px-6 bg-[#0a173b] text-center text-white font-light">
                                {startIndex + index}
                            </td>
                            <td className="border border-gray-500 px-6 bg-[#0a173b] text-center text-white font-light">
                                {user.name}
                            </td>
                            <td className="border border-gray-500 px-6 bg-[#0a173b] text-center text-white font-light">
                                {user.email}
                            </td>
                            <td className="border border-gray-500 px-6 bg-[#0a173b] text-center text-white font-light">
                                {user.phone_number}
                            </td>
                            <td className="border border-gray-500 px-6 bg-[#0a173b] text-center text-white font-light">
                                {user.type}
                            </td>
                            <td className="border border-gray-500 bg-[#0a173b] text-center">
                                <EditDashboard user={user} />
                            </td>
                            <td className="border border-gray-500 bg-[#0a173b] text-center relative">
                                <td className="flex justify-center group relative py-2 px-6">
                                    <button
                                        className="rounded-md text-white hover:text-red-500"
                                        onClick={() =>
                                            handleDeleteUser(user.id)
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
            </table>
            <div class="flex justify-center mt-4">
                <nav class="bg-[#eaf0f7] rounded-lg shadow-md p-3">
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={10}
                        containerClassName={
                            'flex flex-wrap items-center justify-center overflow-hidden'
                        }
                        pageClassName={
                            'flex items-center justify-center w-8 h-8 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-200 ease-in-out'
                        }
                        activeClassName={'text-blue-700 bg-blue-500 rounded-md'}
                        previousClassName={
                            'px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-200 ease-in-out'
                        }
                        nextClassName={
                            'px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-200 ease-in-out'
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

export default ListDashboard
