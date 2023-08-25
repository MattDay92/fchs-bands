import React from 'react'
import Header from '../components/images/2018SpringConcertConcertandSymphonicBand.webp'


export default function SymphonicBand() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' src={Header} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Symphonic Band</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='col-12'>
                    <h4 className='ensemble-info-paragraph'>The Franklin Community High School Symphonic Band is a non-auditioned, curricular ensemble 
                    for woodwind and brass students who have some experience in high school band.  Students study a variety of 
                    intermediate level music with several performances throughout the year.  This ensemble prepares students for participation 
                    in wind ensemble.  </h4>
                    <p className='ensemble-info-paragraph'>Performing with the Symphonic Band is a non-auditioned, percussion 
                    ensemble for who have some experience in high school band.  These students study a variety of intermediate level, concert band and percussion music. </p>
                    <p className='mb-5 ensemble-info-paragraph'>The Symphonic Band performs annually at the Fall Concert in September, the Holiday Concert in December, 
                    the ISSMA Organizational Festival in April, and the Spring Concert in early May.  The Symphonic Band is under the 
                    direction of Tim Kosch.  
                </p>
                </div>
                {/* <div className='ensemble-column-1 mb-5'>
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
                {/* <p className='col-12'></p> */}
                

            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center'>
                <div className='col-10 m-auto'>
                    <div className='text-center'>
                        <h3>ISSMA Organizational Festival - <span className='gold-rating'>Gold Rating</span></h3>
                        <p>2023, 2022, 2021<span className='gold-rating'>*</span>, 2019, 2018, 2017, 2016, 
                        2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007</p>
                        <h5 className='mt-5'><span className='gold-rating'>*Gold Rating with Distinction</span></h5>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
