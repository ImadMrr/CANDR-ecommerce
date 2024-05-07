import './styles/Banner.css'
import logo from './assets/logoshop.png'


function Banner() {
    const title = 'Skyjo'
    return (
        <div className='banner-banner'>
            <img src={logo} alt='La maison jungle' className='banner-logo' />
            <h1 className='banner-title'>{title}</h1>
        </div>
    )
}

export default Banner