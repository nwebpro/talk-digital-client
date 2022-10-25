import React, { createContext } from 'react'
import { useLoaderData } from 'react-router-dom';

export const CourseContext = createContext()

const UserContext = ({ children }) => {
    const allCourses = useLoaderData()
    console.log(allCourses)

    return (
        <CourseContext.Provider value={allCourses}>
            { children }
        </CourseContext.Provider>
    );
};

export default UserContext;