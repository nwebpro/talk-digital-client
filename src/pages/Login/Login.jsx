import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='h-screen -mt-[76px] md:-mt-[100px] flex items-center justify-center z-0'>
            <div className="w-full mx-auto max-w-md rounded-xl border border-theme-default p-11 my-24" data-aos='fade-up' data-aos-duration='1000'>
                <h1 className="text-2xl font-bold text-center mb-10">Login</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" name="email" placeholder="Enter your email!" className="w-full px-4 py-3 rounded-md border border-[#e2e1e1] text-heading-text focus:outline-theme-default focus:outline-1 text-sm" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#e2e1e1] text-heading-text focus:outline-theme-default focus:outline-1 text-sm" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-theme-default text-white text-xl">Login</button>
                </form>
                <p className="text-sm text-center sm:px-6 text-heading-text mt-2">New to Talk Digital? 
                    <Link to="/register" className="text-theme-default underline"> Create New Account</Link>
                </p>
                <div className="flex items-center pt-4 space-x-1 my-5">
                    <div className="flex-1 h-px sm:w-16 bg-theme-default"></div>
                    <p className="px-3 text-sm text-">Or</p>
                    <div className="flex-1 h-px sm:w-16 bg-theme-default"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full py-2 border border-[#e2e1e1] rounded-md text-theme-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p className='ml-3 text-[17px]'> Continue with Google</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;