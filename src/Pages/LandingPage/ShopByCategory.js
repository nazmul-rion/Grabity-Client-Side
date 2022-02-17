import React from 'react'
import './LandingPage.css'
import catphoto from "../../images/laptop.png"
const ShopByCategory = () => {
    return (
        <div className='ShopByCategory mx-3'>
            <h4>Shop By Category</h4>

            <div className="row row-cols-3 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card bg-dark text-white shopCategoryCard">
                        <img src={catphoto} className="card-img " alt="..." />
                        <div className="card-img-overlay justify-content-center align-items-center d-flex">
                            <h5 className="card-title">Category title</h5>

                        </div>
                    </div>
                </div>



                <div className="col">
                    <div className="card bg-dark text-white shopCategoryCard">
                        <img src={catphoto} className="card-img " alt="..." />
                        <div className="card-img-overlay justify-content-center align-items-center d-flex">
                            <h5 className="card-title">Category title</h5>

                        </div>
                    </div>
                </div>



                <div className="col">
                    <div className="card bg-dark text-white shopCategoryCard">
                        <img src={catphoto} className="card-img " alt="..." />
                        <div className="card-img-overlay justify-content-center align-items-center d-flex">
                            <h5 className="card-title">Category title</h5>

                        </div>
                    </div>
                </div>



                <div className="col">
                    <div className="card bg-dark text-white shopCategoryCard">
                        <img src={catphoto} className="card-img " alt="..." />
                        <div className="card-img-overlay justify-content-center align-items-center d-flex">
                            <h5 className="card-title">Category title</h5>

                        </div>
                    </div>
                </div>



                <div className="col">
                    <div className="card bg-dark text-white shopCategoryCard">
                        <img src={catphoto} className="card-img " alt="..." />
                        <div className="card-img-overlay justify-content-center align-items-center d-flex">
                            <h5 className="card-title">Category title</h5>

                        </div>
                    </div>
                </div>



                <div className="col">
                    <div className="card bg-dark text-white shopCategoryCard">
                        <img src={catphoto} className="card-img " alt="..." />
                        <div className="card-img-overlay justify-content-center align-items-center d-flex">
                            <h5 className="card-title">Category title</h5>

                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default ShopByCategory