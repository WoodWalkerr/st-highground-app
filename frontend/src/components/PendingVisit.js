import React from 'react'
import { BiUserVoice } from '../icons/icons'

const PendingVisit = ({ pendingCounts }) => {
    return (
        <div>
            {' '}
            <div className="flex flex-col items-center justify-center h-[200px] w-[200px] bg-white shadow-md shadow-bottom rounded-[20px]">
                <p className="text-5xl font-bold text-gray-700  my-4">
                    {pendingCounts}
                </p>
                <BiUserVoice size={20} className="mx-3" />

                <p className="text-sm text-gray-500">Pending Visits</p>
            </div>
        </div>
    )
}

export default PendingVisit
