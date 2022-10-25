import React from 'react';

const BecomeAnInstructor = () => {
    const handleFreeTrial = (e) => {
        e.preventDefault()
    }
    
    return (
        <section className='bg-[#EFF2F9]'>
            <div className='mx-auto lg:container px-5 py-10 lg:py-28'>
                <div className='flex justify-between items-center flex-col lg:flex-row bg-theme-secondary p-10 md:pl-12 lg:p-20 rounded-lg'>
                    <div className='border-l-4 border-theme-default text-white pl-5'>
                        <h3 className='text-2xl md:text-4xl font-bold mb-5'>Become an Instructor</h3>
                        <p className='text-base leading-7 lg:w-2/3'>A best and cheapest way of getting know learning to make a better tomorrow . Our aim everyone gets an education.</p>
                    </div>
                    <form onSubmit={handleFreeTrial} className="mt-10 lg:mt-0 flex flex-col items-center w-full md:flex-row md:bg-white p-[5px] rounded-[60px] lg:w-1/3">
                            <input
                                placeholder="Start trial"
                                required=""
                                type="email"
                                className="flex-grow w-full h-12 px-6 rounded-full focus:outline-none mb-3 md:mr-2 md:mb-0"
                            />
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center px-6 py-4 font-normal md:w-1/3 focus:outline-none bg-theme-default rounded-full text-white text-base"
                            >
                                Start trial
                            </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BecomeAnInstructor;