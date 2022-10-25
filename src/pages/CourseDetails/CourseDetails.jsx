import React from 'react'
import { HiStar } from 'react-icons/hi'
import { FaCloudDownloadAlt, FaChessQueen } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router-dom'

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const {image_url, name, price, author, rating, short_desc, course_overview, description, _id} = courseDetails
    return (
        <>
            <div className="bg-heading-text">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col sm:text-center sm:mb-0">
                            <div className="max-w-xl md:mx-auto text-center lg:max-w-2xl">
                            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                {name}
                            </h2>
                            <p className="text-base text-white md:text-lg">
                                {short_desc}
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:container px-5 py-10 lg:py-20'>
                <div className='grid grid-cols-12 gap-5 md:gap-10 lg:gap-20'>
                    <div className='col-span-12 md:col-span-5 bg-white p-5 md:p-7 lg:p-10 rounded-xl'>
                        <img className='w-full rounded mb-5' src={image_url} alt="" />
                        <h3 className='text-heading-text text-lg mb-3 font-semibold'>{name}</h3>
                        <p className='text-base text-body-text leading-7 mb-5'>{short_desc}</p>
                        <div className='flex justify-between items-center mb-3'>
                            <div className='flex'>
                                <span className='text-heading-text font-bold text-lg pr-2'>{rating}</span>
                                <HiStar className='text-xl lg:text-[25px] text-theme-default' />
                                <HiStar className='text-xl lg:text-[25px] text-theme-default' />
                                <HiStar className='text-xl lg:text-[25px] text-theme-default'/>
                                <HiStar className='text-xl lg:text-[25px] text-theme-default' />
                                <HiStar className='text-xl lg:text-[25px] text-theme-default' />
                            </div>
                            <h4 className='text-theme-secondary font-bold text-2xl mb-3'>${price}</h4>
                        </div>
                        <div className='flex md:flex-col lg:flex-row justify-start items-center gap-5 border-t border-gray-100 pt-5'>
                            <img className='w-20 rounded-full' src={author?.author_img} alt="" />
                            <div>
                                <h2 className='text-heading-text text-2xl font-semibold mb-1'>{author?.name}</h2>
                                <p className='text-base text-body-text'>{author?.last_updated}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-7 bg-white p-5 md:p-7 lg:p-10 rounded-xl'>
                        <h2 className='text-heading-text text-2xl font-semibold mb-3'>Course Overview</h2>
                        <ul className='list-disc pl-8 mb-10'>
                            {
                                course_overview.map((overview, index) => (
                                    <li className='text-lg text-body-text mb-1' key={index}>{overview}</li>
                                ))
                            }
                        </ul>
                        <h2 className='text-heading-text text-2xl font-semibold mb-3'>Description</h2>
                        <p className='text-base text-body-text leading-7 text-justify mb-5'>{description}</p>
                        <div className="flex gap-5 flex-col lg:flex-row">
                            <Link
                            to={`/checkout/${_id}`}
                            aria-label="Get premium access"
                            className="flex justify-between items-center gap-2 font-medium text-white py-3 px-7 rounded transition-colors duration-200 bg-theme-default"
                            >
                                Get premium access.
                                <FaChessQueen />
                            </Link>
                            <button
                            aria-label="Download"
                            className="flex justify-between items-center gap-2 font-medium text-white py-3 px-7 rounded transition-colors duration-200 bg-theme-secondary"
                            >
                                Download
                                <FaCloudDownloadAlt className='text-xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails