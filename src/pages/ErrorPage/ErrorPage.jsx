import React from 'react'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import errorpage from '../../assets/errorpage.json'

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <Lottie animationData={errorpage} loop={true} />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        Sorry, we couldn't find this page.
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-theme-default hover:bg-theme-secondary text-white transition-colors duration-200'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;