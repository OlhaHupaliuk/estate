import '../styles/Welcome.scss' 

const Welcome = () =>{
    return (
        <div className='welcomePage'>
        <div className="welcomeBcground mx-5">
            <img className="ceil" src="/Subtract.svg" width='1800px'height='1200px' alt=""/>
            <img className="floor" src="/Subtract2.svg" alt=""/>
        </div>
        <div className="row d-flex flex-row mx-auto">
            <div className="row__column left d-flex flex-column">
                <div className="capital">
                    <span>Capital raised</span>
                    <h2>$3.5M+</h2>
                    <p>Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future for both you and your cherished family.</p>
                </div>
                <div className="vision d-flex flex-column">
                    <span>Introduction</span>
                    <h3>A vision for liveable, sustainable & affordable.</h3>
                    <button>Start Exploring</button>
                </div>
            </div>
            <div className="row__column right d-flex flex-column">
                <div className='craft'>
                    <h1 className='welcomePage__title'>We craft the
                    future dwelling.</h1>
                </div>
                <div>
                    <img className='welcomePage__image mt-4' src="/Rectangle.jpg" height='712px' alt="" />
                </div>
            </div>
        </div>
        </div>


    )
}

export default Welcome;
