/** React Modules */
import { Link } from 'react-router-dom'

/** SCSS */
import '../sass/components/apartmentCard.scss'

function ApartmentCard() {
    return (
        <Link to='/apartment' className='apartmentCard'>
            <img src='#' alt='Aperçu du logement' />
            <div className='apartmentCard__title'>Titre de la location</div>
        </Link>
    )
}

export default ApartmentCard
