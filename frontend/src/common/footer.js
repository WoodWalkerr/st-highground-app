import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram,
    AiFillLinkedin,
} from 'react-icons/ai'
import { Link } from 'react-scroll'
import { links } from '../data/footerLinks'
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h2>
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-2" />
                            <p className="text-gray-400">
                                Tigbao, Zamboanga del Sur
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaPhoneAlt className="mr-2" />
                            <p className="text-gray-400">+63-953-0412-689</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" />
                            <p className="text-gray-400">
                                highground2023@outlook.com
                            </p>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Links</h2>
                        <ul className="list-none">
                            {links.map(({ id, link }) => (
                                <li
                                    key={id}
                                    className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                    <Link
                                        activeClass="active"
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                               <li className="mb-2">
                <button
                  onClick={() => navigate('/contact-us')}
                  className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">
                            Social Media
                        </h2>
                        <div className="flex items-center">
                            <a href="#" className="mr-4">
                                <AiFillFacebook className="text-gray-400 hover:text-white transition-colors duration-200" />
                            </a>
                            <a href="#" className="mr-4">
                                <AiFillTwitterSquare className="text-gray-400 hover:text-white transition-colors duration-200" />
                            </a>
                            <a href="#" className="mr-4">
                                <AiFillInstagram className="text-gray-400 hover:text-white transition-colors duration-200" />
                            </a>
                            <a href="#">
                                <AiFillLinkedin className="text-gray-400 hover:text-white transition-colors duration-200" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className="text-gray-400">
                        &copy; 2023 Booking App. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
