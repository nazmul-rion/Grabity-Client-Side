import React from 'react'
import { Link } from 'react-router-dom'
import './FooterSection.css'
import logo from '../../images/logo.png'
const FooterSection = () => {

    const backtotophandle = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='FooterSection'>
            <button onClick={backtotophandle} className='backontopbtn font-roboto'>Back on top</button>

            {/* 1st part */}

            <div className="row container-fluid py-5 g-4">
                <div className="col-md-3">
                    <h4>Get to Know us</h4>
                    <Link className='footerLink d-block' to="/Careers">Careers</Link>
                    <Link className='footerLink d-block' to="/Blogs">Blogs</Link>
                    <Link className='footerLink d-block' to="/AboutGrabity">About Grabity</Link>
                    <Link className='footerLink d-block' to="/Investors">Investor Relations</Link>

                </div>

                <div className="col-md-6">
                    <h4>Make Money With Us</h4>
                    <Link className='footerLink d-block' to="/">Sell products on Grabity</Link>
                    <Link className='footerLink d-block' to="/">Sell on Grabity Business </Link>
                    <Link className='footerLink d-block' to="/">Advertise your products</Link>
                    <Link className='footerLink d-block' to="/">Host a Grabity Hub</Link>
                </div>

                <div className="col-md-3">
                    <h4>Let us help you</h4>
                    <Link className='footerLink d-block' to="/">Grabity &amp; Covid-19</Link>
                    <Link className='footerLink d-block' to="/">Your Account</Link>
                    <Link className='footerLink d-block' to="/">Shipping Rates &amp; Policies </Link>
                    <Link className='footerLink d-block' to="/">Returns &amp; Replacements</Link>
                    <Link className='footerLink d-block' to="/">Manage your contents &amp; devices</Link>
                    <Link className='footerLink d-block' to="/">Help</Link>
                </div>
            </div>

            {/* 2nd Part */}

            <div className='bg-light w-100' >
                <div className="container">
                    <img
                        alt="logo"
                        src={logo}
                        width="125px"
                        height="40px"
                        className=""
                    />
                </div>
            </div>

            {/* 3rd Part */}

            <div className="d-flex flex-column flex-md-row justify-content-center py-3">
                <Link className='footerLink d-block px-4' to="/">Conditions of Use</Link>
                <Link className='footerLink d-block px-4' to="/">Privacy Notice</Link>
                <Link className='footerLink d-block px-4' to="/">Interest-Based Ads</Link>
                <Link className='footerLink d-block px-4' to="/">&copy;  2021-2022 Grabity.com.bd</Link>
            </div>

        </div>
    )
}

export default FooterSection