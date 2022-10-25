import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseCategory from '../../components/CourseCategory/CourseCategory';
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
                            <CourseCategory />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;