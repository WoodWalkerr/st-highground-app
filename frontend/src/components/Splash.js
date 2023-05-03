import React from 'react'
// import { navigation } from '../data/scheduleLiks'
// import { useNavigate } from 'react-router-dom'
import ScheduleBookForm from './ScheduleBookForm'

function Splash() {
    
    // const navigate = useNavigate()

    return (
        <div
            className="flex justify-center items-center bg-white w-full mx-auto p-5 py-20"
            style={{
                background: `url(${require('../assets/lake-2.jpg')}) center no-repeat`,
                backgroundSize: 'cover',
                height: '100vh',
            }}
        >
            <div className="flex flex-col text-white mt-12 pt-20">
                <h1 className="text-5xl flex flex-col font-bold text-center">
                    WELCOME TO HIGHGROUND
                    <span className="text-2xl font-normal text-gray-100 mt-5">
                        Take a hike, book a site
                    </span>
                </h1>
                <div className='flex justify-center items-center pt-12 mt-12'>
                <ScheduleBookForm />
            </div>
            </div>
            
        </div>
    )
}

export default Splash
