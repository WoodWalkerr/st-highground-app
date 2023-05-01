import React from 'react'
import { cards } from '../data/cardsData'


const CampingAndTrekkingGuide = () => {
    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center overflow-hidden'>
        <div className="max-w-6xl flex flex-col mx-auto w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mt-6">
                Camping and Trekking Guide
            </h1>
            <p className="text-lg text-center mt-4 px-8">
                Plan your camping and trekking trip in Tigbao,
                Philippines with our guide.
            </p>

            <div className="flex flex-wrap -mx-4 my-8">
                {cards.map(({ title, content, image }) => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                            <h2 className="text-2xl font-bold mb-4"><span className='text-[#4CAF50]'>{title}</span></h2>
                            <p className="text-sm flex-grow">{content}</p>
                            <img
                                src={image}
                                alt={title}
                                className="mt-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default CampingAndTrekkingGuide
