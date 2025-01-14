import '../styles/header.scss'
import NavBar from './NavBar'
const Header = () => {
    return(
        <div className="header d-flex flex-row align-items-center">
            <div className="logoContainer  d-flex flex-row">
                <img src='Frame1.svg' height='60px' className='header__logo'></img>
                <div className="hutlyContainer  d-flex flex-row">
                    <img src='Hutly.svg' height='27.5px' className='header__logo'></img>
                    <img src='®.svg' height='9.6px' className='header__logo'></img>
                </div>
            </div>
            <NavBar />
            <button className='header__btn'>Contact Us</button>
        </div>
    )
}

export default Header;