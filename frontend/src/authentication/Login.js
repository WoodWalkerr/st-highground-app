import React, { useState } from 'react'
import { userLogin } from '../services/UserLoginServices'
import { useNavigate } from 'react-router-dom'

function UserLogin() {
    const navigate = useNavigate()
    const INITIAL_USER_DATA = { email: '', password: '' }
    const [userData, setUserData] = useState(INITIAL_USER_DATA)
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            userLogin(userData).then((res) => {
                if (JSON.stringify(res) !== '{}') {
                    sessionStorage.setItem('jwt', res[1].jwt)
                    localStorage.setItem('data', JSON.stringify(res[0]))

                   const secret = localStorage.getItem('data')
                    // getData(getDataUSer.email).then((res) => console.log(res))
                    console.log("secreto para bibo", JSON.parse(secret))
                    navigate('/', { state: res })
                } else {
                    console.log('User does not exist!')
                }
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-5 sm:px-6 lg:px-8">
            <div className="bg-gray-100 py-20">
                <div className="mx-auto max-w-4xl shadow-lg rounded-lg">
                    <div className="grid md:grid-cols-2">
                        <div
                            className=" bg-center h-80 md:h-auto md:rounded-l-lg"
                            style={{
                                backgroundImage: `url(${require('../assets/img_7425.webp')})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                        ></div>
                        <div className="p-6 sm:p-10 md:rounded-r-lg">
                            <h2 className="text-2xl text-center font-bold mb-5">
                                Sign In
                            </h2>
                            <form onClick={handleSubmit}>
                                <div className="mb-4 ">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-6">
                                    <button
                                        className="w-full bg-[#093545] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div className="block text-center text-gray-500 text-sm font-bold mb-2">
                                    Don't have an account?
                                    <button className='text-[#093545]'
                                        onClick={() => navigate('/sign-up')}
                                    >Sign up.
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserLogin