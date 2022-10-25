import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import CourseDetails from "../pages/CourseDetails/CourseDetails"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Home from "../pages/Home/Home"

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
                path: '/course-details/:courseId',
                loader: ({params}) => fetch(`https://talk-digital.vercel.app/course/${params.courseId}`),
                element: <CourseDetails />
            }
        ]
    }
])