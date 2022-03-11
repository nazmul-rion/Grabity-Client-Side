import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import CustomSpinner from '../../Components/Spinner/CustomSpinner';
import ProductListApi from '../../Hooks/ProductListApi';


const FeatureProductSection = () => {

    const [products] = ProductListApi();


    const [seeMorePagination, setSeeMorePagination] = useState(8);
    const seeMoreButtonHandle = () => {
        setSeeMorePagination(prevValue => prevValue + 8);
    }


    if (products.length <= 0)
        return <CustomSpinner />

    return (
        <div className='FeatureProductSection mx-3'>
            <h4 className='ShopByCategoryTitle'>Explore the latest drops</h4>
            <hr size="5" className='w-50 orangehr' />
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {
                    products.slice(0, seeMorePagination).map(SingleProduct => (
                        <ProductCard
                            products={SingleProduct}
                            key={SingleProduct._id}>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="container py-5">
                <div className='d-flex justify-content-between align-items-center'>
                    <hr size="5" className='orangehr' />
                    <button className='seeMoreBtn' onClick={seeMoreButtonHandle}>See More</button>
                    <hr size="5" className='orangehr' />
                </div>
            </div>


        </div>
    )
}

export default FeatureProductSection