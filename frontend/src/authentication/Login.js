import React, { useState } from 'react'
import { createUser } from '../services/UserServices'
import img from '../assets/Capture.PNG'

const UserLogin = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const onSubmitForm = () => {
        if (!email || !password) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmitForm()) {
            try {
                await createUser(user);
                window.location = '/';
            } catch (error) {
                console.error(error.message);
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-5 sm:px-6 lg:px-8">
            <div className="bg-gray-100 py-20">
                <div className="mx-auto max-w-4xl shadow-lg rounded-lg">
                    <div className="grid md:grid-cols-2">
                        <div className=" bg-center h-80 md:h-auto md:rounded-l-lg">
                            <img
                                src={img}
                                alt="Profile"
                                className=" w-fit h-[100%] rounded-l-lg object-cover object-center mx-auto md:mx-0 shadow-lg hover:shadow-2xl"
                            />
                        </div>
                        <div className="p-6 sm:p-10 md:rounded-r-lg">
                            <h2 className="text-2xl text-center font-bold mb-5">
                                Login
                            </h2>
                            <form onClick={onSubmitForm}>
                                <div className="mb-4 ">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:border-blue-400"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-6">
                                    <div className="flex items-center">
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                        />
                                        <label>
                                            I agree to the license terms.
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <button
                                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        onClick={handleSubmit}>
                                        Sign In
                                    </button>
                                </div>
                                <a
                                    className="block text-center text-gray-500 text-sm font-bold mb-2"
                                    href="/"
                                >
                                    Don't have an account? Sign up.
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
