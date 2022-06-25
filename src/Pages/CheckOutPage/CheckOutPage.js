import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../../Components/Cart/Cart'
import SideMenu from '../../Components/SideMenu/SideMenu'
import useAuth from '../../Context/Authentication/useAuth'

const CheckOutPage = () => {

    const { user } = useAuth()

    return (
        <div>
            <div className="sidebar">
                <SideMenu />
            </div>
            <div className="container-fluid">

                <h1 className="text-center">Your Cart</h1>
                <div className="row row-cols-2">
                    <div className="col px-5 border-end border-dark border-3">
                        <Cart />
                    </div>

                    <div className="col px-5">

                        <h3>Tota: 123</h3>

                        {user.email ? <>
                            <div className='d-flex align-items-center my-3'>
                                <label >Contact</label>
                                <input readOnly className='form-control ms-3' type="text" value={user ? user.email : ''} />
                            </div>

                            <div className='d-flex align-items-center my-3'>
                                <label >Name</label>
                                <input readOnly className='form-control ms-3' type="text" value={user ? user.displayName : ''} />
                            </div>


                            <div className='d-flex align-items-center my-3'>

                                <input placeholder='Gift Card or Discount Code' className='form-control' type="text" />
                                <button className='btn btn-info ms-3'>Submit</button>
                            </div>

                            <hr />


                            <h4>Shipping Method:</h4>

                            <div class="form-check">
                                <input type="radio" name="ShippingMethod" id="Standard" value="Standard" />
                                <label class="form-check-label" for="Standard">
                                    Standard Shipping (5-10 business days) (Free)
                                </label>
                            </div>

                            <div class="form-check">
                                <input type="radio" name="ShippingMethod" id="StandardPlus" value="StandardPlus" />
                                <label class="form-check-label" for="StandardPlus">
                                    Standard Plus Shipping (3-5 business days) (50 Taka)
                                </label>
                            </div>

                            <div class="form-check">
                                <input type="radio" name="ShippingMethod" id="Premium" value="Premium" />
                                <label class="form-check-label" for="Premium">
                                    Premium Shipping (2-3 business days) (100 Taka)
                                </label>
                            </div>



                        </>


                            :
                            <>
                                <h5>Please Login for purchase <Link to={`/signin`}>Login here</Link></h5>
                            </>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage