import React from 'react'
import './ProductCard.css'
import Rating from 'react-rating'
import inboxIcon from '../../images/inboxIcon.svg'
import bookmarkIcon from '../../images/bookmarkIcon.svg'


const ProductCard = (props) => {

    const { _id, ProductName, ProductPhoto, CategoryName, SubCategory, Brand, CurrentPrice, PreviousPrice, ProductRating, NumberOfRaters, TotalUnits, SoldUnits } = props.products;



    return (
        <div className="col ProductCard">
            <div className="card">

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <i class="fa-solid fa-heart text-danger fs-4 p-2"></i>
                    </div>
                    <div>
                        <img src={bookmarkIcon} alt="" className='p-2' />
                    </div>
                </div>


                <div className="productImage">
                    <img src={ProductPhoto} className=" card-img-top" alt={ProductName} />
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
                            <div className="productPreviousPrice">
                                ৳<strike>{PreviousPrice}</strike>
                                <br />
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
            </div>
        </div>
    )
}

export default ProductCard