import React from 'react'
import { useParams } from 'react-router-dom';
import SideMenu from '../../Components/SideMenu/SideMenu';

const ProductDetailsPage = () => {

    const { id } = useParams();

    return (
        <div>

            <div className="sidebar">
                <SideMenu />
            </div>




        </div>
    )
}

export default ProductDetailsPage