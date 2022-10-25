import React from 'react'
import { useLoaderData } from 'react-router-dom';
import BecomeAnInstructor from '../../components/BecomeAnInstructor/BecomeAnInstructor';
import Hero from '../../components/Hero/Hero'
import Instructor from '../../components/Instructor/Instructor';
import PopularCourse from '../../components/PopularCourse/PopularCourse'
import WelcomeTalkDigital from '../../components/WelcomeTalkDigital/WelcomeTalkDigital'

const Home = () => {
    const allCourses = useLoaderData()
    return (
        <>
            <Hero />
            <WelcomeTalkDigital />
            <PopularCourse allCourses={allCourses} />
            <Instructor />
            <BecomeAnInstructor />
        </>
    );
};

export default Home