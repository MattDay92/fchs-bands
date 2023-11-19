import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/images/FCHS-Band-Banner.webp'

export default function PageNotFound() {
    return (
        <div className='main'>
            <div id='hero' className='row home-hero hero-container'>
                <img className='banner' src={Background} />
                <div className='admin-hero-box'>
                    <h1 className='admin-hero-title'>Page Not Found</h1>
                </div>
            </div>
            <div className='my-5 text-center col-10 m-auto'>
                <h2 className='my-5'>We're sorry, but the page you're looking for does not exist.  Please return home and try again. </h2>
                <Link to={'/'} className='btn'>Return Home</Link>
            </div>
        </div>
    )
}
