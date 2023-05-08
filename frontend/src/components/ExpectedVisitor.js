import React from 'react'
import { TbUsers } from '../icons/icons'

const ExpectedVisitor = ({ expectedVisitsCount }) => {
    return (
        <div>
            {' '}
            <div className="flex flex-col items-center justify-center h-[200px] w-[200px] bg-white shadow-md shadow-bottom rounded-[20px]">
                <p className="text-5xl font-bold text-gray-700 ml-2 my-4">
                    {expectedVisitsCount}
                </p>
                <TbUsers size={20} className="mr-3" />

                <p className="text-sm text-gray-500">Visitor Expected</p>
            </div>
        </div>
    )
}

export default ExpectedVisitor
