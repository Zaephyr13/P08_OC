/** SCSS */
import '../sass/layouts/apartmentGrid.scss'

/** Components */
import ApartmentCard from './ApartmentCard'

function ApartmentGrid() {
    return (
        <section className='grid'>
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
        </section>
    )
}

export default ApartmentGrid
