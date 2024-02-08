/** React modules */
import { createBrowserRouter, Outlet } from 'react-router-dom'

/** Components */
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

/** Pages */
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ApartmentPage from '../pages/ApartmentPage'
import AboutPage from '../pages/AboutPage'

/** Template */
const PageLayout = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}

/** Router */
export const router = createBrowserRouter([
    {
        element: <PageLayout />,
        errorElement: (
            <>
                <Navbar />
                <ErrorPage />
                <Footer />
            </>
        ),
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/apartment',
                element: <ApartmentPage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
        ],
    },
])
