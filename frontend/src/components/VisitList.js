import React, { useState, useEffect } from 'react'
import VisitStatus from './VisitStatus'
import { getAllVisits } from '../services/VisitServices'
import { AiOutlineUser } from '../icons/icons'
import ReactPaginate from 'react-paginate'
import Sidebar from '../common/Sidebar'
import { getUsers, searchUsersByName } from '../services/UserServices'
import ExpectedVisitor from './ExpectedVisitor'
import PendingVisit from './PendingVisit'
import DeclinedVisits from './DeclinedVisits'

const VisitList = () => {
    const [visits, setVisits] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true) // add a loading state
    const [searchResults, setSearchResults] = useState([])

    const expectedVisitsCount = visits.filter(
        (visit) => visit.status === 'accepted'
    ).length
    const pendingVisitCounts = visits.filter(
        (visit) => visit.status === 'pending'
    ).length

    const declinedVisitCounts = visits.filter(
        (visit) => visit.status === 'declined'
    ).length

    

    const itemsPerPage = 5
    const pageCount = Math.ceil(visits.length / itemsPerPage)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const handleChange = async (e) => {
        const { value } = e.target

        try {
            const searchResults = await searchUsersByName(value)
            console.log("here", searchResults)
            setSearchResults(searchResults)
        } catch (error) {
            console.error(error.message)
        }
    }

    const startIndex = currentPage * itemsPerPage + 1
    const endIndex = startIndex + itemsPerPage

    const currentData = (visits || []).slice(
        startIndex,
        Math.min(endIndex, visits.length)
    )

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllVisits()
                setVisits(data)

                const usersData = await getUsers()
                setUsers(usersData)
                setIsLoading(false)
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1">
                {/* <div className="flex items-center flex-col justify-between mb-4 bg-gray-100 ">
                            <AdminNavbar />
                    </div> */}
                <div className="p-4 ml-0 md:ml-64 bg-gray-100 ">
                    <div className="grid grid-cols-3 gap-2 px-20 py-10">
                        <ExpectedVisitor
                            expectedVisitsCount={expectedVisitsCount}
                        />
                        <PendingVisit pendingCounts={pendingVisitCounts} />
                        <DeclinedVisits declinedVisitCounts={declinedVisitCounts}/>
                    </div>

                    <div className="flex items-center justify-center h-screen mb-4 border-t-2 border-gray-200 pr-[55px]">
                        <table className=" max-w-6xl shadow-md overflow-hidden rounded-[20px] bg-white shadow-b-md table-auto">
                            <thead>
                                <tr>
                                    <td colSpan={7}>
                                        <div className="text-start flex flex-wrap justify-between p-10 pb-4 pt-7 text-md font-semibold text-gray-600">
                                            VisitList
                                            <input
                                                type="text"
                                                searchResults={searchResults}
                                                onChange={handleChange}
                                                className="hidden p-2 pl-10 text-xs text-gray-900 border border-gray-300 rounded-lg w-50 h-7 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search for users"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr className=" bg-white text-gray-600">
                                    <th className="py-10 text-sm font-semibold ">
                                        #
                                    </th>

                                    <th className="py-10 text-sm font-semibold flex justify-center items-center ">
                                        Name
                                    </th>
                                    <th className="py-10 text-sm font-semibold ">
                                        Date
                                    </th>
                                    <th className="py-10 text-sm font-semibold ">
                                        Time
                                    </th>
                                    <th className=" px-10 py-4 text-sm font-semibold ">
                                        Purpose
                                    </th>
                                    <th className=" px-10 py-4 text-sm font-semibold ">
                                        Status
                                    </th>
                                    <th className=" px-10 py-4 text-sm font-semibold ">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData
                                    .filter(
                                        (visit) =>
                                            searchResults.length === 0 ||
                                            searchResults.includes(visit)
                                    )
                                    .map((visit, index) => {
                                        const user = users.find(
                                            (u) => u.id === visit.user_id
                                        )

                                        if (!visit || !user) {
                                            return null 
                                        }

                                        return (
                                            <tr
                                                key={visit.id}
                                                className="transition-colors text-xs"
                                            >
                                                <td className="px-6 bg-white text-center text-gray-500 font-light whitespace-nowrap">
                                                    {startIndex + index}
                                                </td>
                                                <td className="px-6 py-3 bg-white flex justify-center items-center text-center text-gray-500 font-light">
                                                    <AiOutlineUser
                                                        size={15}
                                                        className="mr-3"
                                                    />
                                                    {user.name}
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
                                                    <VisitStatus
                                                        key={visit.id}
                                                        visit={visit}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                            <tr>
                                <td colSpan={7}>
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

export default VisitList
