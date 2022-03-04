import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DepartmentListApi from '../../Hooks/DepartmentListApi'
import menubaricon from '../../images/menubar.svg'
import './SideMenu.css'
const SideMenu = () => {

    const [departmentList] = DepartmentListApi();
    const [seeMorePagination, setSeeMorePagination] = useState(4);
    const seeAllButtonHandle = () => {
        setSeeMorePagination(departmentList.length);
    }

    const seeLessButtonHandle = () => {
        setSeeMorePagination(4);
    }
    return (
        <div className='py-2 ps-2'>
            <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <img src={menubaricon} alt="" />
            </span>
            <div className="offcanvas offcanvas-start slidebar" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header justify-content-center align-items-center">
                    <h4 className="text-center" id="offcanvasWithBothOptionsLabel">
                        Hello! <Link className='text-light offcanvasSigninBtn' to='/signin'>Sign In</Link>
                    </h4>

                </div>
                <div className="offcanvas-body">
                    <h5>Shop By Department</h5>

                    {
                        departmentList.slice(0, seeMorePagination).map(SingleDepartment => (
                            <div key={SingleDepartment._id} >
                                <h6>
                                    {SingleDepartment.DepartmentName}

                                </h6>
                            </div>
                        ))
                    }

                    {
                        seeMorePagination == 4 ?
                            <p className='text-warning' onClick={seeAllButtonHandle}>See all</p>
                            :
                            <p className='text-warning' onClick={seeLessButtonHandle}>See less</p>

                    }

                    <hr />


                    <h5>Help & Settings</h5>
                    <div><Link className='text-decoration-none text-dark' to='/myaccount'>Your Account</Link></div>
                    <div><Link className='text-decoration-none text-dark' to='/home'>Language</Link></div>
                    <div><Link className='text-decoration-none text-dark' to='/signin'>Sign In</Link></div>


                </div>
            </div>

            <Link className='mx-3 text-light sidemenunav' to='/exploreproducts' >Explore New Products</Link>
            <Link className='mx-3 text-light sidemenunav' to='/todaysdeals' >Today's Deals</Link>
            <Link className='mx-3 text-light sidemenunav' to='/latestdrops' >Latest Drop</Link>

        </div >
    )
}

export default SideMenu