import React, { useState } from 'react'
import { updateVisitStatus } from '../services/VisitServices'
import { AiFillCheckCircle, AiFillCloseCircle } from '../icons/icons'

const VisitListItem = ({ visit }) => {
    const [status, setStatus] = useState(visit.status)

    const handleAccept = async (user_id) => {
        try {
            await updateVisitStatus(user_id, 'accepted')
            setStatus('accepted')
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleDecline = async (user_id) => {
        try {
            await updateVisitStatus(user_id, 'declined')
            setStatus('declined')
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="flex justify-between px-4 py-2 z-50">
            {status === 'pending' && (
                <>
                    <button
                        className="px-5 py-1 text-gray-500 hover:text-green-500 group relative z-50 "
                        onClick={() => handleAccept(visit.user_id)}
                    >
                        <AiFillCheckCircle size={20} />
                        <span className="absolute top-full left-1/2 border border-green-500 transform -translate-x-1/2 -translate-y-2 scale-0 rounded bg-gray-100 p-2 text-xs text-gray-600 group-hover:scale-100">
                        Decline
                    </span>
                    </button>
                    <button
                        className="px-5 py-1 text-gray-500 hover:text-red-500 group relative z-50 "
                        onClick={() => handleDecline(visit.user_id)}
                    >
                        <AiFillCloseCircle size={20} />
                        <span className="absolute top-full left-1/2 border border-red-500 transform -translate-x-1/2 -translate-y-2 scale-0 rounded bg-gray-100 p-2 text-xs text-gray-600 group-hover:scale-100">
                        Accept
                    </span>
                    </button>
                </>
            )}
            {status === 'accepted' && (
                <button className="px-5 py-1 text-green-500 group relative z-50 ">
                    <AiFillCheckCircle size={20} />
                    <span className="absolute top-full left-1/2 border border-green-500 transform -translate-x-1/2 -translate-y-2 scale-0 rounded bg-gray-100 p-2 text-xs text-gray-600 group-hover:scale-100">
                        Accepted
                    </span>
                </button>
            )}
            {status === 'declined' && (
                <button className="px-5 py-1 text-red-500 group relative z-50 ">
                    <AiFillCloseCircle size={20} />
                    <span className="absolute top-full left-1/2 border border-red-500 transform -translate-x-1/2 -translate-y-2 scale-0 rounded bg-gray-100 p-2 text-xs text-gray-600 group-hover:scale-100">
                        Declined
                    </span>
                </button>
            )}
        </div>
    )
}

export default VisitListItem
