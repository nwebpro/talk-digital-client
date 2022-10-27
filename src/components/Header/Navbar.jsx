import React, { useContext, useState } from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [dark, setDark] = useState(false)
    const { user, userLogout } = useContext(AuthContext)
    console.log(user);

    const handleLogout = () => {
        userLogout()
            .then(toast.warning('User logged out!', {autoClose: '500'}))
            .catch(error => (
                toast.error(error.message, {autoClose: 500})
            ))
    }

    const handleDark = e => {
        setDark(e.target.checked);
    }
    
    return (
        <header className='bg-white'>
            <div className="px-4 py-5 lg:py-5 mx-auto w-full lg:container md:px-10 lg:px-8 z-10">
                <div className="relative flex items-center justify-between mx-auto z-10">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            aria-label="Talk Digital Online Courses Platform"
                            title="Talk Digital Online Courses Platform"
                            className="inline-flex items-center mr-8"
                        >
                            <h1 className='text-xl font-bold uppercase'>Talk Digital</h1>
                        </Link>
                        <ul className="items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                    to="/home"
                                    aria-label="Home"
                                    title="Home"
                                    className={({ isActive }) => 
                                        isActive ?
                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                        :
                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    aria-label="Courses"
                                    title="Courses"
                                    className={({ isActive }) => 
                                        isActive ?
                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                        :
                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                    }
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/faq"
                                    aria-label="Faq"
                                    title="Faq"
                                    className={({ isActive }) => 
                                        isActive ?
                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                        :
                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                    }
                                >
                                    Faq
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    aria-label="Blog"
                                    title="Blog"
                                    className={({ isActive }) => 
                                        isActive ?
                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                        :
                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    <ul className="items-center hidden space-x-8 lg:flex">
                        {
                            user?.uid ?
                            <div className="dropdown inline-block relative">
                                <button>
                                    <div className="mr-2 w-10 h-10 flex justify-center items-center rounded-full">
                                        <img title={user?.displayName} src={user.photoURL} className="rounded-full" alt='User Pic' />
                                    </div>
                                </button>
                                <ul className="dropdown-menu absolute hidden bg-theme-default text-white rounded w-40 p-5 left-0 right-10">
                                    <li className="mb-2">
                                        <Link to='/profile'>User Profile</Link>
                                    </li>
                                    <li className="">
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                            :
                            <li>
                                <Link
                                to="/login"
                                aria-label="Login"
                                title="Login"
                                className="font-normal text-lg leading-[22px] tracking-wide bg-theme-default text-white py-3 px-5 rounded transition-colors duration-200"
                                >
                                Login <HiArrowNarrowRight className='w-5 h-5 ml-2 inline-flex'   />
                                </Link>
                            </li>
                        }
                        <li>
                        <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span className='text-body-text text-base'>{dark ? 'Dark' : 'Light'}</span>
                            <span className="relative">
                                <input onClick={handleDark} id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow bg-theme-secondary peer-checked:bg-theme-default"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-theme-default"></div>
                            </span>
                        </label>
                        </li>
                    </ul>
                    <div className="flex items-center lg:hidden">
                    {
                        user?.uid &&
                        <div className="dropdown inline-block relative">
                            <button>
                                <div className="mr-2 w-10 h-10 flex justify-center items-center rounded-full">

                                    <img title={user?.displayName} src={user.photoURL} className="rounded-full" alt='User Pic' />
                                </div>
                            </button>
                            <ul className="dropdown-menu absolute hidden bg-theme-default text-white rounded w-40 p-5 left-0 right-10">
                                <li className="mb-2">
                                    <Link to='/profile'>User Profile</Link>
                                </li>
                                <li className="">
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    }
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-theme-default" viewBox="0 0 24 24"  >
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                            </svg>
                        </button>
                        <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span className='text-body-text text-base'>{dark ? 'Dark' : 'Light'}</span>
                            <span className="relative">
                                <input onClick={handleDark} id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow bg-theme-secondary peer-checked:bg-theme-default"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-theme-default"></div>
                            </span>
                        </label>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                            to="/"
                                            aria-label="Talk Digital Online Courses Platform"
                                            title="Talk Digital Online Courses Platform"
                                            className="inline-flex items-center"
                                            >
                                                <h1 className='text-xl font-bold uppercase'>Talk Digital</h1>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            onClick={() => setIsMenuOpen(false)}
                                            >
                                            <svg className="w-5 text-theme-default" viewBox="0 0 24 24"  >
                                                <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/"
                                                    aria-label="Home"
                                                    title="Home"
                                                    className={({ isActive }) => 
                                                        isActive ?
                                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                                        :
                                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                                    }
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/courses"
                                                    aria-label="Courses"
                                                    title="Courses"
                                                    className={({ isActive }) => 
                                                        isActive ?
                                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                                        :
                                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                                    }
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/faq"
                                                    aria-label="Faq"
                                                    title="Faq"
                                                    className={({ isActive }) => 
                                                        isActive ?
                                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                                        :
                                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                                    }
                                                >
                                                    Faq
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className={({ isActive }) => 
                                                        isActive ?
                                                        'font-normal text-lg leading-[22px] tracking-wide text-theme-default hover:text-theme-default transition-colors duration-200'
                                                        :
                                                        'font-normal text-lg leading-[22px] tracking-wide text-body-text hover:text-theme-default transition-colors duration-200'
                                                    }
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                {
                                                    user?.uid ?
                                                    <div className='hidden'></div>
                                                     :
                                                     <Link
                                                        to="/login"
                                                        aria-label="Login"
                                                        title="Login"
                                                        className="font-normal text-base leading-[22px] tracking-wide bg-theme-default text-white py-3 px-5 rounded transition-colors duration-200"
                                                        >
                                                        Login <HiArrowNarrowRight className='w-5 h-5 ml-2 inline-flex'   />
                                                    </Link>
                                                }
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;