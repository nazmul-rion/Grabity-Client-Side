import React from 'react'
import { Link } from 'react-router-dom';
import explorerIcon from '../../images/explore.png';
import './ExplorerMoreSection.css'
const ExplorerMoreSection = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex flex-md-row flex-column  justify-content-around align-items-center">
                <div className='explorerbannericon'>
                    <img className='img-fluid' src={explorerIcon} alt="" />
                </div>
                <div className='explorertext '>
                    <span className='exptext pe-2'>Explore More</span>
                    <span className='border-2 ps-2 border-start border-dark fs-3'>GRABITY</span>
                    <p style={{
                        fontFamily: 'Sarabun',
                        fontSize: '30px',
                        color: '#A85E50',
                        opacity: 0.58
                    }}>Be a member to be a part of our <br /> community.</p>

                    <Link to='/signin'
                        style={{
                            fontFamily: 'Sansation_Light',
                            fontSize: '25px',
                            color: '#000000',
                            opacity: 0.58,
                            textDecoration: 'none',
                        }}
                    >Sign in today for the best experience </Link>
                </div>
            </div>
        </div >
    )
}

export default ExplorerMoreSection