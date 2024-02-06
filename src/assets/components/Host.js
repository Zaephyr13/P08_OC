import React from 'react'
import '../sass/components/host.scss'

function Host() {
    return (
        <div className='apartment-host'>
            <div className='apartment-host__profile'>
                <h3>Alexandre Dumas</h3>
                <div className='apartment-host__badge'></div>
            </div>
            <div className='apartment-host__rating'>
                <i className='fa-solid fa-star js-on'></i>
                <i className='fa-solid fa-star js-on'></i>
                <i className='fa-solid fa-star js-on'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </div>
        </div>
    )
}

export default Host
