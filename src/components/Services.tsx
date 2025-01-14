
import '../styles/Services.scss'
const Services = () =>{
    return(
        <div className='services mx-auto'>
            <h1 className='services__title'>Services</h1>
            <ul className='services__list d-flex flex-row'>
                <li className='services__list-item dark'>
                    <h3>01</h3>
                    <h2>Furniture
                    Design</h2>
                    <p>The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences.</p>
                </li>
                <li className='services__list-item'>     
                    <h3>02</h3>
                    <h2>Interior 
                    Details</h2>
                    <p>Incorporating interior detailing introduces dimension, tactile qualities, and captivating visual elements to a room, enhancing the overall design through the addition of those final embellishments.</p>
                </li>
                <li className='services__list-item'>
                    <h3>03</h3>
                    <h2>Home
                    Revamping </h2>
                    <p>The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences..</p>
                </li>
            </ul>
        </div>
    )
}

export default Services;