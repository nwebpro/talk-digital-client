import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Category from "../pages/Category/Category"
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import CourseDetails from "../pages/CourseDetails/CourseDetails"
import Courses from "../pages/Courses/Courses"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://talk-digital.vercel.app/courses'),
                element: <Home />
            },
            {
                path: '/home',
                loader: () => fetch('https://talk-digital.vercel.app/courses'),
                element: <Home />
            },
            {
                path: '/courses',
                loader: () => fetch('https://talk-digital.vercel.app/courses'),
                element: <Courses />
            },
            {
                path: '/course-details/:courseId',
                loader: ({ params }) => fetch(`https://talk-digital.vercel.app/course/${params.courseId}`),
                element: <CourseDetails />
            },
            {
                path: '/course-category/:catId',
                loader: ({ params }) => fetch(`https://talk-digital.vercel.app/category/${params.catId}`),
                element: <Category />
            },
            {
                path: '/checkout/:courseId',
                loader: ({ params }) => fetch(`https://talk-digital.vercel.app/course/${params.courseId}`),
                element: <CheckoutPage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])