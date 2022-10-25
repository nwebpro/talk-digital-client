import React from 'react';

const Instructor = () => {
    return (
        <section className='mx-auto lg:container px-5 py-10 lg:py-20'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 tracking-tight sm:text-4xl md:mx-auto text-heading-text text-3xl md:text-4xl font-bold mb-5">
                    Our Experienced Instructor
                </h2>
                <p className="text-base text-body-text md:text-lg">
                    A best and cheapest way of getting know learning to make a better tomorrow . Our aim everyone gets an education.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='w-full bg-white'>
                    <img className='w-full' src="https://img-c.udemycdn.com/user/200_H/28948038_0077_2.jpg" alt="" />
                    <div className='p-5 text-center'>
                        <h2 className='text-heading-text text-2xl font-bold mb-2'>Stephen Grider</h2>
                        <p className='text-base text-body-text'>Web Developer</p>
                    </div>
                </div>
                <div className='w-full bg-white'>
                    <img className='w-full' src="https://img-b.udemycdn.com/user/200_H/712832_5e8d_3.jpg" alt="" />
                    <div className='p-5 text-center'>
                        <h2 className='text-heading-text text-2xl font-bold mb-2'>Mosh Hamedani</h2>
                        <p className='text-base text-body-text'>Web Developer</p>
                    </div>
                </div>
                <div className='w-full bg-white'>
                    <img className='w-full' src="https://img-b.udemycdn.com/user/200_H/6772884_fcfc_2.jpg" alt="" />
                    <div className='p-5 text-center'>
                        <h2 className='text-heading-text text-2xl font-bold mb-2'>Edwin Diaz</h2>
                        <p className='text-base text-body-text'>Web Developer</p>
                    </div>
                </div>
                <div className='w-full bg-white'>
                    <img className='w-full' src="https://img-b.udemycdn.com/user/200_H/7799204_2091_5.jpg" alt="" />
                    <div className='p-5 text-center'>
                        <h2 className='text-heading-text text-2xl font-bold mb-2'>Jonas Schmedtmann</h2>
                        <p className='text-base text-body-text'>Web Developer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructor;