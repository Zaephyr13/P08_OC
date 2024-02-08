import React from 'react'
import '../sass/components/carrousel.scss'

function Carrousel({ urlArray }) {
    return (
        <div>
            <img className='cover' src={urlArray[0]} alt='Apartment Cover' />
        </div>
    )
}

export default Carrousel
