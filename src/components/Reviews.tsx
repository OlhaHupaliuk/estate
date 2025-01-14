import '../styles/Reviews.scss'
import Review from './Review';
const Reviews = () =>{
    return(
        <div className="reviewContainer d-flex mx-auto">
            <h1>What our customers say</h1>
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    )
}

export default Reviews;