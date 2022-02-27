import React from 'react'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
import productPhoto from '../../images/iphone.png'
import './ProductCard.css'

const PriceDropCard = () => {
    return (
        <div className="ProductCard">

            <div className="ProductCardImage">
                <img src={productPhoto} alt="product photo" className="productPhoto" />
            </div>

            <div className="ProductCardContainer">
                <h2 className='text-white'>Brand and Model Name</h2>
                <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima.</p>
                <h4 className='text-info'>Rating:
                    <Rating
                        initialRating={3.5}
                        emptySymbol="ratingEmpty fa-solid fa-star"
                        fullSymbol="ratingFull fa-solid fa-star"
                        readonly
                    /> <small>(3.5)</small>
                </h4>

                <div className="d-flex text-white fs-4 justify-content-center align-items-center text-center" >
                    <div className="ourPrice my-3 border-end border-3 px-2">
                        <div> ৳29685</div>
                        <div>Our Price</div>
                    </div>
                    <div className="retail  border-end border-3 px-2">
                        <div> ৳32095</div>
                        <div>Retail</div>
                    </div>
                    <div className="purchased px-2">
                        <div> ########</div>
                        <div>Purchased</div>
                    </div>
                </div>

                <h5 className="text-white">Available Colors: <small>Red Blue Golden</small></h5>
                <Link to="/test" className="buynowbtn">View Product</Link>

            </div>
            <Link to="/totalcomment" className="text-muted text-decoration-none float-end me-3 mb-3">Total Comments 5</Link>

        </div>
    )
}

export default PriceDropCard