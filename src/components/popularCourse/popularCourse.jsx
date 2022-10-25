import React from 'react'
import { Link } from 'react-router-dom';
import Course from './Course';

const PopularCourse = ({ allCourses }) => {
    console.log(allCourses);
    return (
        <section className='mx-auto lg:container px-5 py-10 lg:py-20'>
            <div className='flex flex-col lg:flex-row justify-between items-center mb-10'>
                <div className='text-center lg:text-left'>
                    <h2 className='text-heading-text text-3xl md:text-4xl font-bold mb-5'>Our Popular Courses</h2>
                    <p className='text-base text-body-text lg:w-2/3 mb-10 lg:mb-0'>A best and cheapest way of getting know learning to make a better tomorrow . Our aim everyone gets an education</p>
                </div>
                <div>
                    <Link
                        to="/courses"
                        aria-label="Explore All Courses"
                        className="inline-flex font-medium text-white py-3 px-7 rounded transition-colors duration-200 bg-theme-default hover:bg-theme-secondary"
                        >
                            Explore All
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    allCourses.map(course => (
                        <Course key={course?._id} course={course} />
                    ))
                }
            </div>
        </section>
    );
};

export default PopularCourse