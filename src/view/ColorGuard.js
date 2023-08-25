import React from 'react'
import MarchingBandBanner from '../components/images/FCHS-Marching-Full.webp'
import Guard1 from '../components/images/FCHS-Guard-1.webp'
import Guard2 from '../components/images/2022FranklinCommunityHSWinterGuard.webp'
import Guard3 from '../components/images/2023FranklinCommunityWinterGuard.webp'


export default function ColorGuard() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner-done' src={MarchingBandBanner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title'>Color Guard</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='ensemble-column-1'>
                    <h4 className='ensemble-info-paragraph'>The Franklin Community High School Guard is a four-time Indiana High School Color Guard Association (IHSCGA) Winter Guard State Finalist as well
                        as a Winter Guard International national semi-finalist and regional finalist.</h4>
                    <p className='mb-5 ensemble-info-paragraph'>In the fall season, the guard performs alongside the Blue Regiment Marching Band at Indiana State School Music Association (ISSMA)
                        and Bands of America (BOA) competitions, as well as performing for all home Grizzly Cubs football games and the annual Franklin Fall Festival and Holiday Lighting parades.
                    </p>
                </div>
                <div className='ensemble-column-2 mb-5'>
                    <div className='carousel carousel-ensemble d-flex justify-content-center'>
                        <div id="carouselGuard" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Guard1} className="carousel-ensemble-img d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src={Guard2} className="carousel-ensemble-img d-block w-100" alt="..." />
                                </div>


                                <div className="carousel-item">
                                    <img src={Guard3} className="carousel-ensemble-img d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselGuard" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselGuard" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center py-5'>
                <div className='col-10 m-auto'>
                    <div className='text-center'>
                        <h1>WGI World Championship Semi-Finalist</h1>
                        <h3>2019</h3>
                    </div>
                    <div className='text-center'>
                        <h3>WGI Regional Finalist</h3>
                        <p>2019, 2017</p>
                    </div>
                    <div className='text-center'>
                        <h3>IHSCGA State Finalist</h3>
                        <p>2022, 2019, 2016, 1993</p>
                    </div>
                    <div className='text-center'>
                        <h3>IHSCGA State Semi-Finalist</h3>
                        <p>2020</p>
                    </div>
                    <div className='text-center'>
                        <h3>Divisional Finals - <span className='gold-rating'>Gold Ratings</span></h3>
                        <p>2014, 2013, 2010, 2009, 2008</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
