import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://talk-digital.vercel.app/course-category')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <>
            <h2 className='text-heading-text text-xl lg:text-2xl font-bold mb-3'>Course Category</h2>
            <ul className='list-disc pl-8'>
                {
                    categories.map(category => (
                        <li key={category.id}>
                            <Link to={`/course-category/${category.id}`}>{category.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default CourseCategory;