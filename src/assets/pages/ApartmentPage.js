import ApartmentDesc from '../components/ApartmentDesc'
import Carrousel from '../components/Carrousel'
import Dropdown from '../components/Dropdown'
/** SCSS */
import '../sass/pages/apartmentPage.scss'

function ApartmentPage() {
    return (
        <section className='apartment-page-layout'>
            <Carrousel />
            <ApartmentDesc />
            <div className='apartment-details'>
                <Dropdown />
                <Dropdown />
            </div>
        </section>
    )
}

export default ApartmentPage
