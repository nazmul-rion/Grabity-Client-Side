import React from 'react'
import './CustomSpinner.css'
const CustomSpinner = () => {
    return (

        <div className='d-flex justify-content-center align-items-center p-3'>
            <div className="loader">
                <div className="face">
                    <div className="circle"></div>
                </div>
                <div className="face">
                    <div className="circle"></div>
                </div>
            </div>
        </div>

    )
}

export default CustomSpinner