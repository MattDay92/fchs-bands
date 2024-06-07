import React from 'react'
import Header from '../components/images/2018SpringConcertJazzEnsemble.webp'

export default function JazzEnsemble() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' alt='FCHS Jazz Ensemble' src={Header} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Jazz Ensemble</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='col-12'>
                    <h4 className='ensemble-info-paragraph'>The Franklin Community High School Jazz Ensemble is an auditioned, curricular
                        ensemble that studies a variety of jazz music, ranging from traditional swing to fusion.  This band has several performances
                        throughout the year.  Students in this ensemble have a high level of facility on their instrument as this music requires
                        more technique and independence.  </h4>
                    <p className='mb-5 ensemble-info-paragraph'>The Jazz Ensemble performs annually at the Fall Concert in September, the Holiday Concert in December,
                        the ISSMA Jazz Festival in April, and the Spring Concert in early May.  The Jazz Ensemble is under the
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

            
            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center'>
                    <div className='col-10 m-auto'>
                        <div className='text-center'>
                            <h3>ISSMA Jazz Festival - <span className='gold-rating'>Gold Rating</span></h3>
                            <p>2024, 2023, 2022, 2021, 2020<span className='gold-rating'>*</span>, 2019, 2018, 2017, 2016, 2014, 2013, 2012, 2011, 2010, 2009, 2008</p>
                            <h4 className='mt-5'><span className='gold-rating'>*Gold Rating with Distinction</span></h4>
                        </div>

                    </div>
                </div>
        </div>
    )
}