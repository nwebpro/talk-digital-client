import React from 'react'
import { HiStar } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const Course = ({ course }) => {
    const {image_url, name, rating, short_desc, _id, price} = course
    return (
        <Link to='/' className='bg-white p-5 rounded-lg flex flex-col h-[560px]'>
            <img className='object-cover w-full rounded-lg mb-5' src={image_url} alt="" />
            <div>
                <h3 className='text-heading-text text-lg mb-3 font-semibold'>{name}</h3>
                <p className='text-base text-body-text leading-7 mb-5'>{short_desc}</p>
                <div className='flex justify-start items-center mb-3'>
                    <span className='text-heading-text font-bold text-lg pr-2'>{rating}</span>
                    <HiStar className='text-[25px] text-theme-default' />
                    <HiStar className='text-[25px] text-theme-default' />
                    <HiStar className='text-[25px] text-theme-default'/>
                    <HiStar className='text-[25px] text-theme-default' />
                    <HiStar className='text-[25px] text-theme-default' />
                </div>
                <h4 className='text-theme-secondary font-bold text-2xl mb-3'>${price}</h4>
            </div>
        </Link>
    );
};

export default Course