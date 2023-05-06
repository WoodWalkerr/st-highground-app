import React from 'react'
const ExpectedVisitor = ({ expectedVisitsCount }) => {
    return (
        <div>
            {' '}
            <div className="flex items-center justify-center h-[200px] w-[200px] bg-white shadow-md shadow-bottom rounded-[20px]">
                <p className="text-sm text-gray-500">Visitor Expected</p>
                <p className="text-xl font-bold text-gray-700 ml-2">
                    {expectedVisitsCount}
                </p>
            </div>
        </div>
    )
}

export default ExpectedVisitor
