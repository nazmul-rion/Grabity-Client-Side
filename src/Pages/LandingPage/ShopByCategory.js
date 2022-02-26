import React from 'react'
import Slider from 'react-slick';
import CategoryListApi from '../../Hooks/CategoryListApi';
import './LandingPage.css'
const ShopByCategory = () => {

    const [categories] = CategoryListApi();

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: true,
        swipeToSlide: true,

        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className='ShopByCategory mx-3'>
            <h4 className='ShopByCategoryTitle'>Shop By Category</h4>
            <hr size="5" className='w-25 orangehr' />

            <div className="container-fluid">
                <Slider {...settings}>
                    {
                        categories.map(SingleCategory => (

                            <div key={SingleCategory._id} className="p-3">
                                <div className="SingleCategoryCard">
                                    <div className="d-flex align-items-center justify-content-around shopCategoryCard px-3">
                                        <div>
                                            <h4 className="catName">
                                                {SingleCategory.CategoryName}
                                            </h4>
                                        </div>
                                        <div className="catIcon p-3">
                                            <img src={SingleCategory.CategoryIcon} className="card-img img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div >
    )
}

export default ShopByCategory