/** SCSS */
import '../sass/pages/homePage.scss'

/** Components */
import Banner from '../components/Banner'
import AppartmentGrid from '../components/ApartmentGrid'

const HomePage = () => {
    return (
        <>
            <Banner />
            <AppartmentGrid />
        </>
    )
}

export default HomePage
