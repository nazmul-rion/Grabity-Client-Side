import React from 'react'
import './NavigationBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import cart from '../../images/cart.svg'
import catIcon from '../../images/CategoryIcon.svg'
import useCart from '../../Context/CartManagement/useCart'
import SideCart from '../SideCart/SideCart'
import useAuth from '../../Context/Authentication/useAuth'

const NavigationBar = () => {

    const { user, signOutUser } = useAuth();
    let navigate = useNavigate();

    const { cartState, cartDispatch } = useCart();



    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#E5E5E5" }} variant="light">
                <Container fluid>
                    <NavLink className="text-decoration-none" to="/">

                        <Navbar.Brand>
                            <img
                                alt="logo"
                                src={logo}
                                width="220px"
                                height="60px"
                                className="d-inline-block align-top"
                            />{' '}

                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mx-auto">
                            <div className="d-flex align-items-center">
                                <div className='me-3'><img onClick={() => { navigate("/allCategories"); }} src={catIcon} alt="All Categories" title="All Categories" /></div>
                                <div className='searchbox my-2' role="search">
                                    <input className='searchinput' id="search" type="search" placeholder="Search anything" autoFocus required />
                                    <button className='searchbtn' type="submit">Go</button>
                                </div>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link className='mx-2' >Select <br /> Language</Nav.Link>
                            <Nav.Link className='mx-2' >Accounts <br />Log in or Sign up</Nav.Link>
                            <Nav.Link className='mx-2' >Returns & <br></br> Orders</Nav.Link>
                            <Nav.Link className='mx-3' data-bs-toggle="offcanvas" data-bs-target="#SideCart" aria-controls="offcanvasRight" >
                                <span className='cartCounter'>{cartState.cartList.length}</span>
                                <span><img src={cart} alt="" srcSet="" /></span>
                                <span >
                                    Cart
                                </span>
                            </Nav.Link>

                            {user.email ? (
                                <>
                                    <Navbar.Text>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img className="rounded rounded-circle mx-2" height="40" width="40" src={user.photoURL} alt="N/A" />
                                            <i onClick={signOutUser} className="text-danger fs-5 fas fa-sign-out-alt"></i>{' '}
                                        </div>
                                    </Navbar.Text>
                                </>
                            ) : (
                                <>
                                    <Navbar.Text>
                                        <div className="d-flex">
                                            <button className="btn" onClick={() => navigate('/signin')}>Sign In</button>{' '}
                                            <button className="btn" onClick={() => navigate('/signup')}>Sign Up</button>{' '}
                                        </div>
                                    </Navbar.Text>
                                </>
                            )}




                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SideCart />
        </div>
    )
}

export default NavigationBar
