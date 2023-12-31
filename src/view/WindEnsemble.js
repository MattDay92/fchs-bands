import React from 'react'
import Header from '../components/images/WindEnsembleHolidayPerformance.webp'


export default function WindEnsemble() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' alt='FCHS Wind Ensemble' src={Header} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Wind Ensemble</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='col-12'>
                    <h4 className='ensemble-info-paragraph'>The Franklin Community High School Wind Ensemble is an auditioned, curricular ensemble for 
                    advanced woodwind and brass students.  Students study a variety of advanced literature with several performances 
                    throughout the year.</h4>
                    <p className='ensemble-info-paragraph'>Performing with the Wind Ensemble is an auditioned ensemble for advanced percussionists.  This class studies a variety of advanced concert band 
                    and percussion literature.  The Wind Ensemble performs annually at the Fall Concert in September, the Holiday Concert in December, 
                    the ISSMA Organizational Festival in April, and the Spring Concert in early May.  The Wind Ensemble is under the 
                    direction of Tim Kosch.
     
                </p>
                </div>
                {/* <div className='ensemble-column-2 mb-5'>
                    <div className='carousel d-flex justify-content-center'>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={DrumLine} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Saxophones} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Trumpets} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div> */}

            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center'>
                <div className='col-10 m-auto'>
                    <div className='text-center'>
                        <h3>ISSMA Organizational Festival - <span className='gold-rating'>Gold Rating</span></h3>
                        <p>2023, 2022, 2021<span className='gold-rating'>*</span>, 2019, 2018, 2017, 2016, 
                        2015, 2014</p>
                        <h4 className='mt-5'><span className='gold-rating'>*Gold Rating with Distinction</span></h4>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}