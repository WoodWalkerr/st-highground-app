import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineUser } from '../icons/icons'
import EditDashboard from './EditDashboard'
import ReactPaginate from 'react-paginate'
import { getUsers, deleteUser } from '../services/UserServices'
import Sidebar from '../common/Sidebar'

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
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1">
                <div className="p-4 md:ml-64">
                    <div className="grid grid-cols-3 gap-2 px-20 py-10">
                        <div className="flex items-center justify-center h-[200px] w-[200px] bg-[#093545] rounded-[20px]">
                            <p className="text-sm text-gray-400">
                                Visitor Expected
                            </p>
                        </div>

                        <div className="flex items-center justify-center h-[200px] w-[200px] bg-[#093545] rounded-[20px]">
                            <p className="text-sm text-gray-400">
                                Default visitor
                            </p>
                        </div>

                        <div className="flex items-center justify-center h-[200px] w-[200px] bg-[#093545] rounded-[20px]">
                            <p className="text-sm text-gray-400">
                                Pending Visits
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center flex-col justify-center h-screen mb-4 border-t-2 border-gray-200 pr-[55px]">
                        <table className="max-w-6xl shadow-md overflow-hidden rounded-[20px] bg-[#093545] table-auto">
                            <thead>
                                <tr>
                                    <th
                                        colSpan={11}
                                        className="text-start pl-10 pb-4 pt-7 text-sm font-light text-gray-300 flex justify-around"
                                    >
                                        List Dashboard
                                    </th>
                                </tr>
                                <tr className=" bg-[#093545]">
                                    <th className="py-10 text-sm font-light text-gray-300">
                                        No.
                                    </th>

                                    <th className="py-10 text-sm font-light flex justify-center items-center text-gray-300">
                                        <AiOutlineUser
                                            size={15}
                                            className="mr-3"
                                        />
                                        Name
                                    </th>
                                    <th className="py-10 text-sm font-light text-gray-300">
                                        Email
                                    </th>
                                    <th className="py-10 text-sm font-light text-gray-300">
                                        Phone Number
                                    </th>
                                    <th className="py-10 text-sm font-light text-gray-300">
                                        Type
                                    </th>
                                    <th
                                        colSpan={2}
                                        className=" px-10 py-4 text-sm font-light text-gray-300"
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
                                        <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                            {startIndex + index}
                                        </td>
                                        <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                            {user.name}
                                        </td>
                                        <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                            {user.phone_number}
                                        </td>
                                        <td className="px-6 bg-[#093545] text-center text-white font-light whitespace-nowrap">
                                            {user.type}
                                        </td>

                                        <td className="bg-[#093545] text-center">
                                            <EditDashboard user={user} />
                                        </td>
                                        <td className="bg-[#093545] text-center relative">
                                            <td className="flex justify-center group relative py-2 px-10">
                                                <button
                                                    className="text-white hover:text-red-500"
                                                    onClick={() =>
                                                        handleDeleteUser(
                                                            user.id
                                                        )
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                    />
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
                                    activeClassName={
                                        'text-blue-700 bg-blue-500 rounded-md'
                                    }
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
                </div>
            </div>
        </div>
    )
}

export default ListDashboard
