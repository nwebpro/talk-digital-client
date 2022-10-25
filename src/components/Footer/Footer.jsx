import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className='px-4 pt-16 mx-auto lg:container md:px-24 lg:px-8 '>
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link
                            to="/"
                            aria-label="Talk Digital Online Courses Platform"
                            title="Talk Digital Online Courses Platform"
                            className="inline-flex items-center mr-8"
                        >
                            <h1 className='text-xl font-bold uppercase'>Talk Digital</h1>
                        </Link>
                        <div className="mt-6 lg:max-w-sm text-body-text text-base">
                            <p className='mb-2'>2120 Seddon Park, Hamilton New Zeaind</p>
                            <p>info@talkdigital.com</p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-heading-text mb-5">
                            Company
                        </p>
                        <ul>
                            <li className='mb-2 text-body-text text-base'>Feature</li>
                            <li className='mb-2 text-body-text text-base'>Pricing</li>
                            <li className='mb-2 text-body-text text-base'>Product</li>
                            <li className='mb-2 text-body-text text-base'>Support</li>
                        </ul>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-heading-text mb-5">
                            About Us
                        </p>
                        <ul>
                            <li className='mb-2 text-body-text text-base'>Blog</li>
                            <li className='mb-2 text-body-text text-base'>News</li>
                            <li className='mb-2 text-body-text text-base'>Privacy</li>
                            <li className='mb-2 text-body-text text-base'>Press Logo</li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-heading-text mb-5">
                            Social
                        </span>
                        <div className="flex items-center mt-5 space-x-3">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-5 pb-5 border-t">
                    <p className="text-base text-body-text">
                        Copyright © 2022 Talk Digital. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;