/** SCSS */
import '../sass/layouts/apartmentGrid.scss'

/** Components */
import ApartmentCard from './ApartmentCard'

function ApartmentGrid() {
    return (
        <div className='grid'>
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
        </div>
    )
}

export default ApartmentGrid
