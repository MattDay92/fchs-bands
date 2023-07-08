import React from 'react'
import MarchingBandBanner from '../components/images/MarchingBand.jpeg'

export default function Fees() {
    return (
        <div className='main'>
            <div id='hero' className='row other-hero-container'>
                <img className='other-banner' />
                <div className='other-hero-box'>
                    <h1 className='other-hero-title'>Fees and Payments</h1>
                </div>
            </div>
            <div className='fees-info d-flex align-items-center'>
                <div className='col-10 m-auto text-center'>
                <h5 className='mb-5'>The Franklin Community High School Band Boosters are now able to accept online 
                    fee payments. Simply fill out the form below. If you have any questions, 
                    please contact our booster treasurer at treasurer@franklinbands.info.</h5>
                <div className='mb-5 d-flex justify-content-around'>
                    <a className='btn' href='http://localhost:3000/2022-2023-General-Fee-Letter.pdf' download>General Fee Information</a>
                    <a className='btn' href='http://localhost:3000/\2023-Marching-Fee-Letter.pdf' download>Marching Fee Information</a>
                </div>
                <h3>Fees can also be paid directly from My Music Office - click <a className='musicoffice-link' href='https://mymusicoffice.com/login.php' target='_blank'>HERE</a> to log in.</h3>
                </div>
            </div>
        </div>
    )
}
