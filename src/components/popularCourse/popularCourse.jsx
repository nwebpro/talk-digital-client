import React from 'react'
import { Link } from 'react-router-dom'
import Course from './Course'
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Navigation } from "swiper"

const PopularCourse = ({ allCourses }) => {
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
            <Swiper
                breakpoints={{
                    "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    },
                    "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    },
                }}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    allCourses.map(course => (
                        <SwiperSlide key={course?._id}>
                            <Course course={course} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default PopularCourse