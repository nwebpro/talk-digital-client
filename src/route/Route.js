import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Blog from "../pages/Blog/Blog"
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import CourseDetails from "../pages/CourseDetails/CourseDetails"
import Courses from "../pages/Courses/Courses"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import FAQ from "../pages/FAQ/FAQ"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Profile from "../pages/Profile/Profile"
import Register from "../pages/Register/Register"
import PrivateRoute from "./PrivateRoute"

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
                path: '/checkout/:courseId',
                loader: ({ params }) => fetch(`https://talk-digital.vercel.app/course/${params.courseId}`),
                element: (
                    <PrivateRoute>
                        <CheckoutPage />
                    </PrivateRoute>
                )
            },
            {
                path: '/profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/blog',
                element: <Blog />
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