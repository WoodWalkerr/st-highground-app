import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../services/UserLoginServices'
import { AiOutlineEye, AiOutlineEyeInvisible } from '../icons/icons'

function AdminLogin({ setIsAdmin, setIsAuthorized }) {
    const [adminData, setAdminData] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setAdminData((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            userLogin(adminData).then((res) => {
                if (JSON.stringify(res) !== '{}' && res !== undefined) {
                    console.log(res)

                    if (res[1].role_id !== 2) {
                        alert('Not an admin account')
                        console.log(res[1].role_id)
                        navigate('/admin-login')
                    } else {
                        sessionStorage.setItem('jwt', res[0].jwt)
                        sessionStorage.setItem('userRole', res[0].userRole)
                        localStorage.setItem('data', JSON.stringify(res[1]))

                        const data = localStorage.getItem('data')
                        if (data) {
                            console.log('Fetch Data: ', JSON.parse(data))
                            navigate('/visit-request', { state: res })
                        }
                        sessionStorage.getItem('userRole') === '2'
                            ? setIsAdmin(true)
                            : setIsAdmin(false)
                        setIsAuthorized(true)
                    }
                } else {
                    console.log('User/Password does not exist!')
                    alert("User/Password doesn't exist!")
                }
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const handleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    return (
        <div
            className="flex justify-center items-center max-w-full mx-auto p-5 py-20"
            name="Home"
            style={{
                background: `url(${require('../assets/bonefire.jpg')}) center no-repeat`,
                backgroundSize: 'cover',
                height: '100vh',
            }}
        >
            {' '}
            <div className="py-20 ">
                <div className="mx-auto max-w-xs shadow-lg rounded-lg">
                    <div className="p-6 rounded-lg bg-white">
                        <h2 className="text-2xl text-start font-bold mb-5">
                            Admin Sign In
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 ">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4 relative">
                                <input
                                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <button
                                    className="absolute top-0 right-0 mt-4 mr-4 focus:outline-none"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? (
                                        <AiOutlineEye
                                            style={{ opacity: 0.5 }}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            style={{ opacity: 0.5 }}
                                        />
                                    )}
                                </button>
                            </div>

                            <div className="mb-6">
                                <button
                                    className="w-full text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-600 transition duration-200 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="block text-center text-gray-500 text-sm font-bold mb-2">
                                Don't have an account?
                                <button
                                    className="text-[#093545]"
                                    onClick={() => navigate('/admin-sign-up')}
                                >
                                    Sign up.
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
