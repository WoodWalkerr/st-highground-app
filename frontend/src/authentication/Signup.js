import React, { useState } from 'react'
import { createUser } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from '../icons/icons'
import { Validation } from '../icons/Validation'

const UserSignUp = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})

    const handleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        role_id: 1,
    })

    const { name, email, password, phone_number} = user

    const handleChange = (event) => {
        const { name, value } = event.target;
        let newValue = value;
      
        if (name === 'phone_number') {
          newValue = value.replace(/\D/g, '');
        }
      
        const newUser = { ...user, [name]: newValue };
        setUser(newUser);
      };
      
    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !phone_number) {
          setErrors(Validation(user));
          return;
        }
        try {
          await createUser(user);
          navigate('/sign-in');
        } catch (error) {
          console.error(error.message);
        }
      };

    return (
        <div
            className="flex justify-center items-center bg-white max-w-full mx-auto p-5 py-20"
            name="Home"
            style={{
                background: `url(${require('../assets/bonefire.jpg')}) center no-repeat`,
                backgroundSize: 'cover',
                height: '100vh',
            }}
        >
            <div className="flex flex-col justify-center py-20 sm:px-6 lg:px-8 ">
                <div className="bg-gray-50 rounded-lg">
                    <div className="mx-auto max-w-xs shadow-lg">
                        <div className="p-6 rounded-lg">
                            <h2 className="text-2xl text-start pb-3 font-bold mb-5 text-black">
                                Sign Up
                            </h2>
                            <form className="space-y-4" onSubmit={onSubmitForm}>
                                <div className="mb-4">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Username"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="John@gmail.com"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4 relative">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm">
                                            {errors.password}
                                        </p>
                                    )}

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

                                <div className="mb-4 ">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-[#4CAF50]"
                                        id="phone_number"
                                        name="phone_number"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="Phone Number"
                                        value={phone_number}
                                        onChange={handleChange}
                                    />
                                    {errors.phone_number && (
                                        <p className="text-red-500 text-sm">
                                            {errors.phone_number}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-green-500 hover:bg-green-600 transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Sign Up
                                    </button>
                                    <div className="block text-center text-gray-500 text-sm font-bold my-3 mx-2">
                                        Already have an account?
                                        <button
                                            className="text-[#093545]"
                                            onClick={() => navigate('/sign-in')}
                                        >
                                            Sign in.
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignUp
