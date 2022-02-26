import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import productPhoto from '../../images/iphone.png'
import Rating from 'react-rating'


const ProductCard = (props) => {

    const { _id, ProductName, ProductPhoto, CategoryName, SubCategory, Brand, CurrentPrice, PreviousPrice, ProductRating, NumberOfRaters, TotalUnits, SoldUnits } = props.products;



    return (
        <div class="col ProductCard">
            <div class="card">
                <div className="productImage">
                    <img src={ProductPhoto} class=" card-img-top" alt={ProductName} />
                </div>
                <div class="card-body">
                    <span className='productCategoryName'>{CategoryName}/{SubCategory}/{Brand}</span>

                    <div className="row justify-content-around align-items-center">

                        <div className='col-md-8 border-end border-dark border-2'>
                            <div className="productName">
                                {ProductName}
                            </div>

                            <div className="productPrice">
                                ৳{CurrentPrice}
                            </div>

                            <div className="productRating">
                                <Rating
                                    initialRating={ProductRating}
                                    emptySymbol="ratingEmpty fa-solid fa-star"
                                    fullSymbol="ratingFull fa-solid fa-star"
                                    readonly
                                /> <small>{ProductRating} ({NumberOfRaters})</small>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="productPreviousPrice">
                                ৳<strike>{PreviousPrice}</strike>
                                <br />
                                <span style={{ fontSize: "10px" }}>Previous Price</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard