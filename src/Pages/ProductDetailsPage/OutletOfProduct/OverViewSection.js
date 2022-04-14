import React from 'react'
import { useLocation } from 'react-router-dom'

const OverViewSection = () => {

    const location = useLocation();

    const { ProductOverview } = location.state;


    return (
        <div className='container'>
            <span dangerouslySetInnerHTML={{ __html: ProductOverview }} >

            </span>
        </div>

    )
}

export default OverViewSection