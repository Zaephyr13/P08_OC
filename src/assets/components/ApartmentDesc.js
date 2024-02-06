import React from 'react'
import '../sass/components/apartmentDesc.scss'
import Host from './Host'
import ApartmentHeader from './ApartmentHeader'

const ApartmentDesc = () => {
    return (
        <div className='apartment-desc'>
            <ApartmentHeader />
            <Host />
        </div>
    )
}

export default ApartmentDesc
