import React from 'react'
import '../sass/components/apartmentHeader.scss'

function ApartmentHeader() {
    return (
        <div className='apartment-desc__header'>
            <div className='apartment-desc__title'>
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <h2>Paris, Île-de-France</h2>
            </div>
            <div className='apartment-desc__tags'>
                <div className='tag'>Cozy</div>
                <div className='tag'>Canal</div>
                <div className='tag'>Paris 10</div>
            </div>
        </div>
    )
}

export default ApartmentHeader
