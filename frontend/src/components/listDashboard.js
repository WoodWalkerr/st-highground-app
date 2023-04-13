import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import EditDashboard from './EditDashboard'
import { getUsers, deleteUser } from '../services/UserServices'

const ListDasboard = () => {
    const [user, setUser] = useState([])

    const handleDeleteUser = async (id) => {
        try {
            const success = await deleteUser(id)
            if (success) {
                setUser((prevUsers) => prevUsers.filter((u) => u.id !== id))
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers()
                setUser(users)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="h-screen max-w-6xl mx-auto bg-white px-4 py-20">
            <div className="flex justify-center items-center uppercase my-5 text-4xl text-gray-700">
                <h1 className="font-bold tracking-wider">List Dashboard</h1>
            </div>
            <table className="max-w-6xl mx-auto border-collapse border border-gray-200 shadow-md rounded-md">
                <thead>
                    <tr className="bg-[#eaf0f7]">
                        <th className="border border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                            ID
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
                        <th className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700">
                            Edit
                        </th>
                        <th className="border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr
                            key={user.id}
                            className="hover:bg-gray-100 transition-colors text-sm"
                        >
                            <td className="border border-gray-500 px-6 bg-[#0a173b] text-center text-white font-light">
                                {user.id}
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
                            <td className="border border-gray-500 bg-[#0a173b] px-6 py-4 text-center">
                                <button
                                    className="text-white w-10 h-10"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListDasboard
