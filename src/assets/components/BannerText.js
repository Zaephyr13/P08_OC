/** SCSS */
import '../sass/components/bannerText.scss'

const BannerText = () => {
    return (
        <div className='banner-text'>
            <img src='crique.png' alt='crique avec reliefs' />
            <h1 className='banner-text__title'>
                <span>Chez vous,&nbsp;</span>partout et ailleurs
            </h1>
        </div>
    )
}

export default BannerText
