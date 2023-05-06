import { useEffect, useState } from 'react'
import { getPendingReq } from '../services/PendingRequest'

function PendingRequests() {
    const [pendingRequests, setPendingRequests] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchPendingRequests() {
            setIsLoading(true)
            try {
                const userID = JSON.parse(localStorage.getItem('data')).id
                const data = await getPendingReq(userID)
                setPendingRequests(data)
            } catch (error) {
                console.error(error.message)
            }
            setIsLoading(false)
        }

        fetchPendingRequests()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (pendingRequests.length === 0) {
        return <div>You have no pending requests.</div>
    }

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h2 className="text-lg  font-bold mb-2">
                            Pending Requests
                        </h2>
                        <div className="max-h-96 overflow-y-auto">
                            {pendingRequests.map((request) => (
                                <div key={request.id} className="mb-2">
                                    <div className="bg-white bg-opacity-100 shadow overflow-hidden sm:rounded-lg">
                                        <div className="px-4 py-5 sm:px-6">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                Visit on {request.visit_date} at{' '}
                                                {request.visit_time}
                                            </h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                {request.purpose}
                                            </p>
                                        </div>
                                        <div className="px-4 py-4 sm:px-6">
                                            <dl className="flex flex-wrap justify-between">
                                                <div className="w-full sm:w-auto">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        Status
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900">
                                                        {request.status}
                                                    </dd>
                                                </div>
                                                <div className="w-full sm:w-auto">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                        User
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900">
                                                        {request.user.name}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingRequests
