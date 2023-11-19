import React from 'react'
import Header from '../components/images/2018SpringConcertConcertandSymphonicBand.webp'

export default function ConcertBand() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' alt='FCHS Concert Band' src={Header} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Concert Band</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='col-12'>
                    <h4 className='ensemble-info-paragraph'>The Franklin Community High School Concert Band is a non-auditioned, curricular beginning ensemble for
                        incoming freshman woodwind and brass students who have participated in band during middle school.  Students study a variety of concert music
                        and have several performances throughout the year.  This ensemble will prepare students for participation in both symphonic band and wind ensemble.  </h4>
                    <p className='ensemble-info-paragraph'>Performing with the Concert Band is a non-auditioned, beginning percussion
                        ensemble for freshmen percussionists who have participated in band during middle school.  These students study a variety of
                        concert band and percussion music over the course of the school year.  </p>

                    <p className='mb-5 ensemble-info-paragraph'>The Concert Band performs annually at the Fall Concert in September, the Holiday Concert in December,
                        the ISSMA Organizational Festival in April, and the Spring Concert in early May.  The Concert Band is under the
                        direction of Tim Kosch.
                    </p>
                </div>

                {/* <div className='ensemble-column-2 mb-5'>
                    <div className='carousel d-flex justify-content-center'>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Carousel1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Carousel2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Carousel3} className="d-block w-100" alt="..." />
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
                        <p>2023, 2022, 2021<span className='gold-rating'>*</span>, 2019, 2018, 2017</p>
                        <h4 className='mt-5'><span className='gold-rating'>*Gold Rating with Distinction</span></h4>
                    </div>

                </div>
            </div>
        </div>
    )
}