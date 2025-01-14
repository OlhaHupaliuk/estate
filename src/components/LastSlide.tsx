import '../styles/LastSlide.scss'
import Footer from './Footer'
const LastSlide = () =>{
    return(
        <div className="lastSlide mx-auto">
            <div className="lastSlide_row d-flex flex-row">
                <h1 className='title'>Start Your
                Project Now!</h1>
                <button className='lastSlide_row__btn'>Contact Us</button>
            </div>
            <p className='lastSlide__p'>Made for you convenience for a
                more beautiful future for you and
                your family
                </p>
            <Footer />
        </div>
    )
}

export default LastSlide;