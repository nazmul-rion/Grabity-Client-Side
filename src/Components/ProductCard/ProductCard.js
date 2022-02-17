import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import productPhoto from '../../images/iphone.png'
import Rating from 'react-rating'


const ProductCard = () => {
    return (
        <div>

            <div class="ProductCard">

                <div class="ProductCardImage">
                    <img src={productPhoto} alt="mouse corsair" class="mouse" />
                </div>

                <div class="ProductCardContainer">
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
                    <p class="ProductCardPrice">Price: ৳29685 <strike className="text-danger">৳35560</strike> </p>
                    <h5 class="text-white">Available Colors: <small>Red Blue Golden</small></h5>
                    <Link to="/test" class="buynowbtn">Buy Now</Link>
                </div>

            </div>

        </div>
    )
}

export default ProductCard