import React, { useEffect } from 'react'
import Header from '../components/images/2018SpringConcertJazzEnsemble.webp'

export default function Tickets() {

    useEffect(() => {
        window.location.href='https://thefranklinpac.ludus.com/index.php'
    }, [])

    return (
        <div className='fullpage'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' alt='FCHS Jazz Ensemble' src={Header} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Tickets</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row text-center my-5'>
                    <h2>Redirecting to thefranklinpac.ludus.com...</h2>
                </div>
            </div>
        </div>
    )
}