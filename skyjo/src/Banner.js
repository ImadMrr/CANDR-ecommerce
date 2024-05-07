import logo from './assets/logoshop.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Skyjo'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner