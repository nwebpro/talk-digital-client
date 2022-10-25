import React from 'react';

const Instructor = () => {
    return (
        <section className='mx-auto lg:container px-5 py-10 lg:py-20'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Our Experienced Instructor
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    A best and cheapest way of getting know learning to make a better tomorrow . Our aim everyone gets an education.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    grid-1
                </div>
                <div>
                    grid-1
                </div>
                <div>
                    grid-1
                </div>
                <div>
                    grid-1
                </div>
            </div>
        </section>
    );
};

export default Instructor;