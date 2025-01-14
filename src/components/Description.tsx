import '../styles/Description.scss'
const Description = () =>{
    return(
    <div className="dscript__container d-flex flex-row mx-5">
            <img className='dscript__img' src="/Frame.jpg" alt="" />
            <div className="dscript__content">
                <div className='end d-flex flex-column'>
                    <span className="dscript__span">Satisfied Clients</span>
                    <h2 className="dscript__num">8.4M+</h2>
                </div>
                <div className='centerContent d-flex flex-column'>
                    <h1 className="dscript__title">We can bring to life everything you've ever envisioned and dreamed of – your ideals and desires are our creations.</h1>
                    <p className="dscript__p">Our purpose is to transform your wildest dreams into reality. Regardless of how unconventional your vision may be, we possess the capability to craft your dream home, fulfilling your every desire.</p>
                    <button className="dscript__btn">See more</button>
                </div>
        </div>
    </div>
    )
} 

export default Description;