import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFoundPage.css'

const NotFoundPage = () => {
    let navigate = useNavigate();
    return (
        <section className='NotFoundPage'>
            <main >
                <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
                <h2>Error: 404 page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed</p>
                <button className='btn btn-outline-info my-3'
                    onClick={() => { navigate("/"); }}
                >Back To Home</button>
            </main>

        </section>
    )
}

export default NotFoundPage