import React, { useState } from 'react'
import './LatestDropPage.css'
import ProductCard from '../../Components/ProductCard/ProductCard';
import SideMenu from '../../Components/SideMenu/SideMenu'
import DepartmentListApi from '../../Hooks/DepartmentListApi';
import ProductListApi from '../../Hooks/ProductListApi';
import ReactPaginate from 'react-paginate';
import CustomSpinner from '../../Components/Spinner/CustomSpinner';

const LatestDropPage = () => {

    //Products Handle
    const [products, setProducts, pageNumber, setpageNumber, pageSize, setPageSize, totalProductCount, setTotalProductCount] = ProductListApi();
    const [ProductpageCount, setProductPageCount] = useState(0);
    const [ProductOffset, setProductOffset] = useState(0);

    const ProductPageChangeHandle = (e) => {
        setpageNumber(e.selected);
        // setPageSize(3);
    }


    // Products Handle

    // DepartmentLis Handle
    const [departmentList] = DepartmentListApi();
    const [seeMoreDepPagination, setSeeMoreDepPagination] = useState(4);
    const seeAllDepButtonHandle = () => {
        setSeeMoreDepPagination(departmentList.length);
    }
    const seeLessDepButtonHandle = () => {
        setSeeMoreDepPagination(4);
    }
    // DepartmentLis Handle



    return (
        <div className='LatestDropPage'>

            <div className="sidebar">
                <SideMenu />
            </div>

            <div style={{ backgroundColor: '#F1F1F1' }}>
                <span className='ms-3'>{(pageNumber * pageSize) + 1}-{(pageNumber * pageSize) + products.length} of {totalProductCount} results found.</span>
            </div>

            <div className="container-fluid row my-5">

                <div style={{ backgroundColor: '#F1F1F1' }} className="col-3">

                    <h5 className='mt-3'><b>Department Wise</b></h5>
                    {
                        departmentList.slice(0, seeMoreDepPagination).map(SingleDepartment => (
                            <div key={SingleDepartment._id} >
                                <h6>
                                    {SingleDepartment.DepartmentName}

                                </h6>
                            </div>
                        ))
                    }

                    {
                        seeMoreDepPagination == 4 ?
                            <p className='text-dark' onClick={seeAllDepButtonHandle}>See all department</p>
                            :
                            <p className='text-dark' onClick={seeLessDepButtonHandle}>See less</p>

                    }

                    <h5 className='mt-3'><b>New & Upcoming</b></h5>
                    <h6>New Arrivals</h6>
                    <h6>Coming Soon</h6>

                    <h5 className='mt-3'><b>Condition</b></h5>
                    <h6>New</h6>
                    <h6>Used</h6>
                    <h6>Renewed</h6>

                    <h5 className='mt-3'><b>Price</b></h5>


                    <h5 className='mt-3'><b>Deals & Discounts</b></h5>
                    <h6>All discounts</h6>
                    <h6>Today’s Deal</h6>
                </div>


                <div className="col-9">

                    <div className="row row-cols-1 row-cols-md-3 g-4">

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
            </div>


            {/* Pagination  */}

            <div className="container">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    marginPagesDisplayed={4}
                    pageRangeDisplayed={3}
                    pageCount={Math.ceil(totalProductCount / pageSize)}
                    previousLabel="< previous"
                    onPageChange={ProductPageChangeHandle}
                    containerClassName={'flex-md-row flex-column pagination justify-content-center container align-items-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active-page'}
                />
            </div>






        </div>
    )
}

export default LatestDropPage