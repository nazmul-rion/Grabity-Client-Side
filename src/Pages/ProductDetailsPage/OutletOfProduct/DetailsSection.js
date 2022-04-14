
import React from 'react'
import { useLocation } from 'react-router-dom';

const DetailsSection = () => {

    const location = useLocation();

    const { ProductDetails } = location.state;

    return (

        <div dangerouslySetInnerHTML={{ __html: ProductDetails }}>

        </div>

    )
}

export default DetailsSection