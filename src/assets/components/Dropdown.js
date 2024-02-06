import React from 'react'
import '../sass/components/dropdown.scss'

function Dropdown() {
    return (
        <div className='apartment-details__desc'>
            <div className='title-arrow'>
                <h3 className='category'>Description</h3>
                <i className='fa-solid fa-chevron-up'></i>
            </div>
            <p className='list-content'>
                Profitez du charme de la vie parisienne dans un magnifique
                appartement. A 3 minutes à pied du Canal Saint Martin, vous
                serez proche des transports, mais également de nombreux
                commerces. L'appartement est tout équipé, et possède également
                un parking pour ceux qui souhaitent se déplacer en voiture.
            </p>
        </div>
    )
}

export default Dropdown
