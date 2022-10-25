import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Course from '../../components/PopularCourse/Course'

const Courses = () => {
    const allCourses = useLoaderData()
    return (
        <>
            <section className='mx-auto lg:container px-5 py-10 lg:py-20'>
                <div className='grid grid-cols-12 gap-[30px]'>
                    <div className='col-span-12 order-2 md:order-1 md:col-span-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                allCourses.map(course => (
                                    <Course key={course._id} course={course} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-span-12 order-1 md:order-2 md:col-span-4 '>
                        <div className='bg-white p-10 rounded'>
                        <h2 className='text-heading-text text-xl lg:text-2xl font-bold mb-3'>Course Name</h2>
                        <ul className='list-disc pl-8'>
                            {
                                allCourses.map(course => (
                                    <li className='mb-2 text-base' key={course?._id}>
                                        <Link to={`/course-details/${course?._id}`}>{course?.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;