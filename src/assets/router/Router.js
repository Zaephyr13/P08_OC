/** React modules */
import { createBrowserRouter, Outlet } from 'react-router-dom'

/** Components */
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

/** Pages */
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'


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
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/apartment',
                element: <h1>Nos Appartements</h1>,
            },
            {
                path: '/about',
                element: <h1>À propos</h1>,
            },
        ],
    },
])