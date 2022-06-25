import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useCart from '../../Context/CartManagement/useCart';
import CartProductList from './CartProductList';

const Cart = () => {

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


    let total = TotalPriceObj.reduce((a, b) => a + (b['TotalPrice'] || 0), 0);


    return (
        <div>
            {
                cartState.cartList.length > 0 ?

                    cartState.cartList.map(SingleCartProduct =>
                    (
                        <CartProductList
                            SingleCartProduct={SingleCartProduct}
                            key={SingleCartProduct.itemId}
                            TotalPriceHandle={TotalPriceHandle}
                        >
                        </CartProductList>
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




        </div>

    )
}

export default Cart