import React from 'react'
import cards from '../data/cardsData'

const CampingAndTrekkingGuide  = () => {
    return (
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mt-6">
                Camping and Trekking Guide
            </h1>
            <p className="text-lg text-center mt-4 px-8">
                Plan your camping and trekking trip in Pagadian City,
                Philippines with our guide.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                {cards.map(({ title, content, image }) => (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p className="text-lg">{content}</p>
                        <img
                            src={image}
                            alt={title}
                            className="mt-6 rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>

            {/* Lake Relaxation */}
            <div className="my-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Lake Relaxation</h2>
                    <p className="text-lg">
                        After your camping and trekking adventure, head over to
                        the nearby lake for some relaxation and fun. The lake is
                        located in the heart of Pagadian City and is easily
                        accessible by car or public transportation. There are
                        also several resorts and accommodations available in the
                        area.
                    </p>
                    <img
                        src="../assets/img_7425.webp"
                        alt="Lake Relaxation"
                        className="mt-6 rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default CampingAndTrekkingGuide 
