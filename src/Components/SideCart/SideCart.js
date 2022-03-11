import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useCart from '../../Context/CartManagement/useCart';
import './SideCart.css'
import SideCartProductList from './SideCartProductList';

const SideCart = () => {

    let navigate = useNavigate();
    const { cartState, cartDispatch } = useCart();
    const [TotalPriceObj, setTotalPriceObj] = useState([]);

    const TotalPriceHandle = (price) => {
        const copyTotalPrice = [...TotalPriceObj];
        const curItemIndex = copyTotalPrice.findIndex((i) => i.itemId === price.itemId);
        if (curItemIndex < 0) {
            copyTotalPrice.push(price);
        } else {
            const copyItem = { ...copyTotalPrice[curItemIndex] };
            copyItem.TotalPrice = price.TotalPrice;
            copyTotalPrice[curItemIndex] = copyItem;
        }

        setTotalPriceObj(copyTotalPrice)

    }


    let total = TotalPriceObj.reduce((a, b) => a + (b['TotalPrice'] || 0), 0);;




    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="SideCart" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header border-bottom border-2">
                <h4 >Your Cart <span className='fs-6'>({cartState.cartList.length} item)</span></h4>

                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

                {
                    cartState.cartList.length > 0 ?

                        cartState.cartList.map(SingleCartProduct =>
                        (
                            <SideCartProductList
                                SingleCartProduct={SingleCartProduct}
                                key={SingleCartProduct.itemId}
                                TotalPriceHandle={TotalPriceHandle}
                            >
                            </SideCartProductList>
                        ))
                        :
                        <>
                            <h5>
                                Your Cart is Empty
                            </h5>
                        </>
                }

                <div className='border border-2 border-dark ' />

                {/* Total Price  */}

                <div className="d-flex justify-content-between align-items-center my-3">
                    <h5>Estimated Total:</h5>
                    <h5 className='text-success'>৳{total}</h5>
                </div>

                <button className='btn btn-warning w-100 my-3'
                    onClick={() => { navigate("/checkOutPage"); }}
                >Check Out</button>


            </div>
        </div>
    )
}

export default SideCart