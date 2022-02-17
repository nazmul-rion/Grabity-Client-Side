import React from 'react'
import './NavigationBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import cart from '../../images/cart.svg'

const NavigationBar = () => {
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
                            <div className='searchbox my-2' role="search">
                                <input className='searchinput' id="search" type="search" placeholder="Search anything" autofocus required />
                                <button className='searchbtn' type="submit">Go</button>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link className='mx-2' >Select <br /> Language</Nav.Link>
                            <Nav.Link className='mx-2' >Accounts <br />Log in or Sign up</Nav.Link>
                            <Nav.Link className='mx-2' >Returns & <br></br> Orders</Nav.Link>
                            <Nav.Link className='mx-3' >
                                <span className='cartCounter'>5</span>
                                <span><img src={cart} alt="" srcset="" /></span>
                                <span href="#deasets">
                                    Cart
                                </span>
                            </Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
