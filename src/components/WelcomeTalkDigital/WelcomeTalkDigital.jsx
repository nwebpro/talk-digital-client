import React from 'react'
import { FaDesktop, FaRegCommentDots, FaRegFile } from 'react-icons/fa'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const WelcomeTalkDigital = () => {
    return (
        <section className='mx-auto lg:container px-5 py-10 lg:py-20'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-20 lg:gap-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-2/4'>
                    <div className='bg-white p-10 transition-colors duration-200 hover:shadow-lg shadow-gray-300/50'>
                        <div className='w-10 h-10 bg-[#E9F6FF] flex items-center justify-center rounded-full mb-5'>
                            <FaDesktop className='text-lg text-theme-secondary' />
                        </div>
                        <h3 className='text-heading-text font-medium text-xl md:text-2xl leading-9 mb-5'>Online Live Class Continuously</h3>
                        <p className='text-body-text text-base'>We are providing the best trusted teacher for live class</p>
                    </div>
                    <div className='bg-white p-10 transition-colors duration-200 hover:shadow-lg shadow-gray-300/50'>
                        <div className='w-10 h-10 bg-[#E9F6FF] flex items-center justify-center rounded-full mb-5'>
                            <FaRegCommentDots className='text-lg text-theme-secondary' />
                        </div>
                        <h3 className='text-heading-text font-medium text-xl md:text-2xl leading-9 mb-5'>Online Live Ask and Answer</h3>
                        <p className='text-body-text text-base'>We are providing interaction with teacher and students</p>
                    </div>
                    <div className='bg-white p-10 transition-colors duration-200 hover:shadow-lg shadow-gray-300/50'>
                        <div className='w-10 h-10 bg-[#E9F6FF] flex items-center justify-center rounded-full mb-5'>
                            <FaRegFile className='text-lg text-theme-secondary' />
                        </div>
                        <h3 className='text-heading-text font-medium text-xl md:text-2xl leading-9 mb-5'>Daily Online Task and Work</h3>
                        <p className='text-body-text text-base'>We are providing the best trusted teacher for live class</p>
                    </div>
                    <div className='bg-white p-10 transition-colors duration-200 hover:shadow-lg shadow-gray-300/50'>
                        <div className='w-10 h-10 bg-[#E9F6FF] flex items-center justify-center rounded-full mb-5'>
                            <HiOutlineBookOpen className='text-lg text-theme-secondary' />
                        </div>
                        <h3 className='text-heading-text font-medium text-xl md:text-2xl leading-9 mb-5'>Proper Subject With Guide</h3>
                        <p className='text-body-text text-base'>We are providing the best trusted teacher for live class</p>
                    </div>
                </div>
                <div className='lg:w-2/4 text-center lg:text-left'>
                    <h2 className='text-heading-text text-3xl md:text-4xl lg:text-6xl font-bold leading-10 lg:leading-[70px] mb-5'>Welcome To Online Class Talk Digital</h2>
                    <p className='text-body-text text-base leading-7 md:px-36 lg:pl-0 lg:pr-60 mb-10'>A best and cheapest way of getting know learning to make a better tomorrow . Our aim everyone gets an education. We are giving the best services of learning.</p>
                    <Link
                        to="/courses"
                        aria-label="Learn More"
                        className="inline-flex font-medium text-white py-3 px-7 rounded transition-colors duration-200 bg-theme-default hover:bg-theme-secondary"
                        >
                            Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WelcomeTalkDigital;