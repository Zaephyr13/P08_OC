import React from 'react'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
/** SCSS */
import '../sass/pages/aboutPage.scss'

function AboutPage() {
    return (
        <div className='about-page-layout'>
            <Banner />
            <div className='about-dropdowns'>
                <Dropdown
                    category='Fiabilité'
                    content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
                />
                <Dropdown
                    category='Respect'
                    content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
                />
                <Dropdown
                    category='Service'
                    content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
                />
                <Dropdown
                    category='Sécurité'
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    )
}

export default AboutPage
