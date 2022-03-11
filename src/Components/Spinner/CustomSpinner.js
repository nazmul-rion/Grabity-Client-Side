import React from 'react'
import './CustomSpinner.css'
const CustomSpinner = () => {
    return (
        <div className='d-flex justify-content-center p-3'>
            <div class="loader">
                <div class="face">
                    <div class="circle"></div>
                </div>
                <div class="face">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    )
}

export default CustomSpinner