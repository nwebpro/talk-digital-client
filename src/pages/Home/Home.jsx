import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Hero from '../../components/Hero/Hero'
import PopularCourse from '../../components/PopularCourse/PopularCourse'
import WelcomeTalkDigital from '../../components/WelcomeTalkDigital/WelcomeTalkDigital'

const Home = () => {
    const allCourses = useLoaderData()
    return (
        <>
            <Hero />
            <WelcomeTalkDigital />
            <PopularCourse allCourses={allCourses} />
        </>
    );
};

export default Home