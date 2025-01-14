import NavBar from './NavBar'
import '../styles/footer.scss'
const Footer = () => {
    return (
        <div className='footer d-flex flex-row mx-auto'>
            <div>
                <img src="Hutly.svg" />
                <img src="®.svg" />
            </div>
            <NavBar />
        </div>
    )
}

export default Footer;