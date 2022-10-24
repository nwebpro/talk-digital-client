import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import videoCourse from '../../assets/videoCourse.json'

const Hero = () => {
    return (
        <section className="px-4 pt-10 lg:pt-0 mx-auto lg:container">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 md:pl-10 lg:pr-5 lg:mb-0 w-full">
                    <div className="max-w-xl mb-6">
                        <h2 className="text-5xl lg:text-[80px] font-bold text-heading-text lg:leading-[90px] mb-5 lg:mb-4">
                        Your Next Online School
                        </h2>
                        <p className="text-base text-body-text md:text-lg">
                            A best and cheapest way of getting know learning to make a better tomorrow . Our aim everyone gets an education
                        </p>
                    </div>
                    <div className="flex">
                        <Link
                        to="/courses"
                        aria-label="Get Started"
                        className="block font-medium text-white py-3 px-7 rounded transition-colors duration-200 bg-theme-default hover:bg-theme-secondary"
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className='flex gap-8 mt-10'>
                        <div>
                            <h2 className='font-bold text-heading-text text-4xl'>30k</h2>
                            <p className='text-body-text text-base'>Student</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-heading-text text-4xl'>600</h2>
                            <p className='text-body-text text-base'>Mentor</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-heading-text text-4xl'>1K+</h2>
                            <p className='text-body-text text-base'>Course</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Lottie animationData={videoCourse} loop={true} />
                </div>
            </div>
        </section>
    );
};

export default Hero;