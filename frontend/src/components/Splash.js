import React from 'react'

function Splash() {
    return (
        <div className='flex justify-center items-center bg-white h-screen w-full max-w-6xl mx-auto p-5 py-20'>
            <div className="text-black py-10">
                <h1 className="text-4xl font-bold text-center mb-8">
                    WELCOME TO HIGHGROUND
                </h1>
                <h4 className="text-md text-center mb-8">
                    To book a visit click on the button below
                </h4>
                <div className="flex justify-center">
                    <a
                        href="/"
                        className="bg-black text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
                    >
                        Schedule a Visit
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Splash
