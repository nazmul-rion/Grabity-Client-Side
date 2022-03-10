import React, { useEffect, useState } from 'react'
import './ProductDetailsPage.css'
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import SideMenu from '../../Components/SideMenu/SideMenu';
import useCart from '../../Context/CartManagement/useCart';
import SingleProductApi from '../../Hooks/SingleProductApi';


const ProductDetailsPage = () => {

    const { id } = useParams();

    const [singleProduct] = SingleProductApi(id);

    const { cartState, cartDispatch } = useCart();


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        swipeToSlide: true,
        rows: 1,
    };





    return (
        <div>

            <div className="sidebar">
                <SideMenu />
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">

                    <div className=" col-md-6  d-flex justify-content-center align-items-center  border border-3 mx-5 my-3">

                        <div className='container'>
                            <Slider {...settings}>
                                {
                                    singleProduct.ProductPhoto ?
                                        singleProduct.ProductPhoto.map(SingleProductPhoto =>

                                        (

                                            <div key={singleProduct._id} className="container d-flex justify-content-center align-items-center">
                                                <img className='productPhoto img-fluid' src={SingleProductPhoto} alt={singleProduct.ProductName} />
                                            </div>
                                        )
                                        ) : <></>

                                }
                            </Slider>
                        </div>


                    </div>


                    <div className="productDetails col">

                        <div className='py-5'>
                            <h5>Brand: {singleProduct.Brand}</h5>
                            <h4>{singleProduct.ProductName}</h4>
                            <h5>Model: {singleProduct.ModelNumber}</h5>
                            <h5>Price: <span className='text-success'>৳{singleProduct.CurrentPrice}</span> <strike className='text-danger fs-6'>৳{singleProduct.PreviousPrice}</strike></h5>
                            <h5 className="f6-6">
                                <Rating
                                    initialRating={singleProduct.ProductRating}
                                    emptySymbol="ratingEmpty fa-regular fa-star"
                                    fullSymbol="ratingFull fa-solid fa-star"
                                    readonly
                                /> <small>{singleProduct.ProductRating} ({singleProduct.NumberOfRaters})</small>
                            </h5>
                            <br />
                            <br />
                            <h6>Shipping Details </h6>
                            <h6>See seller’s information</h6>
                            <br />
                            <br />

                            <button className='btn btn-warning  px-5 py-2'
                                onClick={() => cartDispatch({
                                    type: 'ADD_TO_CART',
                                    itemId: singleProduct._id
                                })}

                            >Add To Cart</button>



                        </div>
                    </div>

                </div>
            </div>






        </div >
    )
}

export default ProductDetailsPage