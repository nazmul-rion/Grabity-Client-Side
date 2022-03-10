import React from 'react'
import useCart from '../../Context/CartManagement/useCart';
import './SideCart.css'
import SideCartProductList from './SideCartProductList';

const SideCart = () => {

    const { cartState, cartDispatch } = useCart();


    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="SideCart" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header border-bottom border-2">
                <h4 >Your Cart <span className='fs-6'>({cartState.cartList.length} item)</span></h4>

                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

                {
                    cartState.cartList.length > 0 ?





                        cartState.cartList.map(SingleCartProduct => (
                            <SideCartProductList
                                SingleCartProduct={SingleCartProduct}
                                key={SingleCartProduct.itemId}>
                            </SideCartProductList>
                        ))
                        :
                        <>
                            <h5>
                                Your Cart is Empty
                            </h5>
                        </>
                }




            </div>
        </div>
    )
}

export default SideCart