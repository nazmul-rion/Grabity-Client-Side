import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductListApi from '../../Hooks/ProductListApi';

const FeatureProductSection = () => {

    const [products] = ProductListApi();

    return (
        <div className='FeatureProductSection mx-3'>
            <h4 className='ShopByCategoryTitle'>Explore the latest drops</h4>
            <hr size="5" className='w-25 orangehr' />
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {
                    products.map(SingleProduct => (
                        <ProductCard
                            products={SingleProduct}
                            key={SingleProduct._id}>
                        </ProductCard>
                    ))
                }


            </div>
        </div>
    )
}

export default FeatureProductSection