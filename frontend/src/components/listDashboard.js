import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineUser } from '../icons/icons'
import EditDashboard from './EditDashboard'
import ReactPaginate from 'react-paginate'
import { getUsers, deleteUser } from '../services/UserServices'
import Sidebar from '../common/Sidebar'
import ExpectedVisitor from './ExpectedVisitor'
// import DefaultVisitor from './DefaultVisitor'
import PendingVisit from './PendingVisit'

// import AdminNavbar from '../common/AdminNavbar'

const ListDashboard = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 5
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
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1">
                {/* <div className="flex items-center flex-col justify-between mb-4 bg-gray-100 ">
                            <AdminNavbar />
                    </div> */}
                <div className="p-4 ml-0 md:ml-64 bg-gray-100 ">
                    <div className="grid grid-cols-3 gap-2 px-20 py-10">
                        <ExpectedVisitor />

                        {/* <DefaultVisitor /> */}

                        <PendingVisit />
                    </div>

                    <div className="flex items-center flex-col justify-center h-screen mb-4 border-t-2 border-gray-200 pr-[55px]">
                        <table className="max-w-6xl shadow-md overflow-hidden rounded-[20px] bg-white shadow-b-md table-auto">
                            <thead>
                                <tr>
                                    <td colSpan={6}>
                                        <div className="text-start flex flex-wrap justify-between pl-10 pb-4 pt-7 text-md font-semibold text-gray-600">
                                            List Dashboard
                                        
                                        <label
                                            for="table-search"
                                            class="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div class="relative flex flex-col pr-5">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    class="w-3 h-3 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="table-search-users"
                                                class="block p-2 pl-10 text-xs text-gray-900 border border-gray-300 rounded-lg w-50 h-7 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search for users"
                                            />
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=" bg-white font-semibold text-gray-600 ">
                                    <th className="py-10 px-10 text-sm ">#</th>

                                    <th className="py-10 text-sm flex justify-center items-center ">
                                        Name
                                    </th>
                                    <th className="py-10 text-sm ">Email</th>
                                    <th className="py-10 text-sm ">
                                        Phone Number
                                    </th>
                                    <th
                                        colSpan={2}
                                        className=" px-10 py-4 text-sm "
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((user, index) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-white transition-colors text-xs"
                                    >
                                        <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                            {startIndex + index}
                                        </td>
                                        <td className="px-6 py-3 bg-white flex justify-start items-center text-center text-gray-500 font-light whitespace-nowrap">
                                            <AiOutlineUser
                                                size={15}
                                                className="mr-3"
                                            />
                                            {user.name}
                                        </td>
                                        <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                            {user.phone_number}
                                        </td>
                                        <td className="bg-white text-center">
                                            <EditDashboard user={user} />
                                        </td>
                                        <td className="text-center relative">
                                            <td className="flex justify-center group relative py-2 px-10">
                                                <button
                                                    className="text-gray-500 hover:text-red-500"
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
                            <tr>
                                <td colSpan={6}>
                                    <div className="flex justify-center pb-5">
                                        <nav className="flex mt-4">
                                            <ul className="flex pl-0 list-none rounded">
                                                <ReactPaginate
                                                    previousLabel={'<'}
                                                    nextLabel={'>'}
                                                    pageCount={10}
                                                    containerClassName={
                                                        'flex flex-wrap items-center justify-center overflow-hidden'
                                                    }
                                                    pageClassName={
                                                        'flex items-center justify-center w-6 h-6 mx-1 text-xs font-medium text-gray-400  hover:bg-gray-200 transition duration-200 ease-in-out'
                                                    }
                                                    activeClassName={
                                                        'text-gray-100 '
                                                    }
                                                    previousClassName={
                                                        'px-3 py-2 text-xs font-medium text-gray-400  hover:bg-gray-200 transition duration-200 ease-in-out'
                                                    }
                                                    nextClassName={
                                                        'px-3 py-2 text-xs font-medium text-gray-400 hover:bg-gray-200 transition duration-200 ease-in-out'
                                                    }
                                                    previousLinkClassName={
                                                        'page-link'
                                                    }
                                                    nextLinkClassName={
                                                        'page-link'
                                                    }
                                                    onPageChange={
                                                        handlePageClick
                                                    }
                                                />
                                            </ul>
                                        </nav>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListDashboard
