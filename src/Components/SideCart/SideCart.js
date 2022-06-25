import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useCart from '../../Context/CartManagement/useCart';
import Cart from '../Cart/Cart';
import './SideCart.css'

const SideCart = () => {

    let navigate = useNavigate();
    const { cartState, cartDispatch } = useCart();


    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="SideCart" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header border-bottom border-2">
                <h4 >Your Cart <span className='fs-6'>({cartState.cartList.length} item)</span></h4>

                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

                <Cart />

                <button className='btn btn-warning w-100 my-3'
                    onClick={() => { navigate("/checkOutPage"); }}
                >Check Out</button>


            </div>
        </div>
    )
}

export default SideCart