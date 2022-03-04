import React from 'react'
import './ProductCard.css'
import Rating from 'react-rating'
import inboxIcon from '../../images/inboxIcon.svg'
import logo from '../../images/logo2.png'
import bookmarkIcon from '../../images/bookmarkIcon.svg'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {

    const { _id, ProductName, ProductPhoto, CategoryName, SubCategory, Brand, CurrentPrice, PreviousPrice, ProductRating, NumberOfRaters, TotalUnits, SoldUnits } = props.products;


    return (
        <div className="col ProductCard">
            <div className="card">

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img style={{
                            width: "35px",
                            height: "37px"
                        }} className="p-2 img-fluid" src={logo} alt="" />
                    </div>
                    <div>
                        <img src={bookmarkIcon} alt="" className='p-2' />
                    </div>
                </div>

                <Link className='text-decoration-none text-dark' to={`/productdetails/${_id}`}>
                    <div className="productImage">
                        <img src={ProductPhoto[0]} className="card-img-top" alt={ProductName} />
                    </div>
                    <div className="card-body py-0">
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
                                        emptySymbol="ratingEmpty fa-regular fa-star"
                                        fullSymbol="ratingFull fa-solid fa-star"
                                        readonly
                                    /> <small>{ProductRating} ({NumberOfRaters})</small>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="productPreviousPrice d-flex flex-column">
                                    <span> ৳<strike>{PreviousPrice}</strike></span>
                                    <span style={{ fontSize: "10px" }}>Previous Price</span>
                                </div>
                            </div>

                        </div>

                        <div className="my-2 d-flex justify-content-between align-items-center">
                            <div className="messagebtn">
                                <img src={inboxIcon} alt="" />
                            </div>
                            <div className="soldunit">
                                <span>{SoldUnits} Units sold</span>
                            </div>
                        </div>


                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ProductCard