import React, { useEffect, useState } from 'react'
import useCart from '../../Context/CartManagement/useCart';
import SingleProductApi from '../../Hooks/SingleProductApi';
import CustomSpinner from '../Spinner/CustomSpinner';

function CartProductList(props) {

    const { cartDispatch } = useCart();

    const { itemId, quantity } = props.SingleCartProduct;
    const { TotalPriceHandle } = props;
    const [singleProduct] = SingleProductApi(itemId);
    const [Total, setTotal] = useState(0);

    useEffect(() => {
        if (singleProduct.CurrentPrice != null) {
            setTotal(singleProduct.CurrentPrice * quantity);
            TotalPriceHandle({ TotalPrice: singleProduct.CurrentPrice * quantity, itemId: itemId });
        }

    }, [singleProduct.CurrentPrice, quantity, Total])







    if (singleProduct.length <= 0)
        return <CustomSpinner />

    return (
        <>


            <div className="">
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-md-4 border d-flex align-items-center justify-content-center">
                        <img src={singleProduct.ProductPhoto ? singleProduct.ProductPhoto[0] : ''} width="100vh" className="img-fluid rounded-start" alt={singleProduct.ProductName} />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className="card-title">{singleProduct.ProductName}</h5>
                                    <div>
                                        <span className='text-success'>৳{singleProduct.CurrentPrice}</span>
                                    </div>
                                </div>

                                <div>
                                    <i className="fs-5 text-danger fa-solid fa-trash"
                                        onClick={() => {
                                            cartDispatch({
                                                type: 'REMOVE_FROM_CART',
                                                itemId: itemId
                                            });


                                        }
                                        }
                                    ></i>
                                </div>

                            </div>
                            <br />
                            <div className="d-flex justify-content-between align-items-center">

                                <div className="d-flex  justify-content-start align-items-center">

                                    <button className=' btn '
                                        onClick={() => {
                                            cartDispatch({
                                                type: 'DECREASE_QUANTITY',
                                                itemId: itemId
                                            });

                                        }
                                        }
                                    >
                                        -
                                    </button>

                                    <input readOnly className='  text-center form-control ' type="number" value={quantity} />

                                    <button className=' btn '
                                        onClick={() => {
                                            cartDispatch({
                                                type: 'ADD_TO_CART',
                                                itemId: itemId
                                            });

                                        }
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                                <div>

                                    <span>Total: ৳{
                                        Total

                                    }</span>
                                </div>

                            </div>












                        </div>


                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}

export default CartProductList