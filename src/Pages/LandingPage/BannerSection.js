import React from 'react'
import { Carousel } from 'react-bootstrap'

const BannerSection = () => {
    return (
        <div>

            <div className="row" style={{ backgroundColor: "#E5E5E5" }}>
                <div className="col-md-8">
                    <Carousel variant="dark">
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/Vv4bKNQ/dashboard.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, commodi.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/Vv4bKNQ/dashboard.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/Vv4bKNQ/dashboard.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, accusamus!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="mt-2 col-md-4 align-items-center justify-content-center d-flex flex-column">
                    <h3 className='text-center font-sansation'>
                        We welcome <br /> you to <br /> our community <br /> driven market
                    </h3>
                    <input className='form-control border border-3 m-2 px-2' type="text" placeholder='Email Address' />

                    <div className="container">
                        <div className='d-flex justify-content-between align-items-center'>
                            <hr size="5" className='orhr' />
                            <span className='px-2'>OR</span>
                            <hr size="5" className='orhr' />
                        </div>
                    </div>

                    <div className="d-flex my-2">
                        <button className='facebookbtn'>
                            <div className="d-flex align-items-center">
                                <i className="fa-brands fs-2 fa-facebook-square"></i><span>Facebook</span>
                            </div>
                        </button>
                        <button className='googlebtn'>
                            <div className="d-flex align-items-center">
                                <i className="fa-brands fa-google-plus-square fs-2"></i><span>Google</span>
                            </div>
                        </button>
                        <button className='twitterbtn'>
                            <div className="d-flex align-items-center">
                                <i className="fa-brands fs-2 fa-twitter-square"></i><span>Twitter</span>
                            </div>
                        </button>
                    </div>
                    <a className='text-muted mb-3'>Why you need an account to explore?</a>
                </div>
            </div>

        </div >
    )
}

export default BannerSection