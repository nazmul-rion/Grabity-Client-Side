import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import menubaricon from '../../images/menubar.svg'
import './SideMenu.css'
const SideMenu = () => {


    return (
        <div className='py-2 ps-2'>
            <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <img src={menubaricon} alt="" />
            </span>
            <div class="offcanvas offcanvas-start slidebar" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">

                    </h5>

                </div>
                <div class="offcanvas-body">
                    <p>

                    </p>
                </div>
            </div>

        </div>
    )
}

export default SideMenu