import React from 'react'
import MarchingBandBanner from '../components/images/FCHS-Marching-Full.webp'
import Marching1 from '../components/images/Trumpets.webp'
import Marching2 from '../components/images/FCHS-Marching-Full-2.webp'

export default function MarchingBand({MBItineraryName, MBWGIItineraryName}) {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner-done' alt='FCHS Blue Regiment Marching Band' src={MarchingBandBanner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title'>Blue Regiment Marching Band</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='ensemble-column-1'>
                    <h4 className='mb-5 text-center'>The Franklin Community High School BLUE REGIMENT Marching Band is an eight-time ISSMA
                        Scholastic Class A Finalist - placing 6th in 2022 and 2023 - their highest placement yet. </h4>
                    <p>The Blue Regiment has seen improved competitive success over the past few years with its well-developed show designs.
                        The Blue Regiment competes in both the Indiana State School Music Association (ISSMA) and Bands of America (BOA)
                        competitions during the fall season as well as performing for all home Grizzly Cubs' football games and the annual
                        Franklin Fall Festival and Holiday Lighting parades.
                    </p>
                </div>
                <div className='ensemble-column-2 mb-5'>
                    <div className='carousel carousel-ensemble d-flex justify-content-center'>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Marching1} className="d-block w-100" alt="FCHS Marching Trumpets" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Marching2} className="d-block w-100" alt="FCHS Marching Band" />
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
                </div>
                <div className='ensemble-itinerary-btn-div m-auto text-center'>
                    <div className='ensemble-itinerary-btn'>
                        <h2>{MBItineraryName}</h2>
                        <a className='btn' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBFootballItinerary?alt=media&token=cc6d46ea-734e-4a75-b00e-729ac2a65b2d'>Download</a>
                    </div>
                    <div>
                        <h2>{MBWGIItineraryName}</h2>
                        <a className='btn' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBWGIItinerary?alt=media&token=1d437222-6d73-4488-ab57-6dfcef3e5de1'>Download</a>
                    </div>
                </div>
                <div className='ensemble-btns'>
                    <a className='btn' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMarchingSeasonInfo?alt=media&token=799b1080-3fd8-4ed5-a65e-879a887c11d8' download>2025 Season Information</a>
                    <a className='btn' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGImportantDates?alt=media&token=5f2fe224-fd3d-4aa7-821c-07fc3be5cb7f' download>Important Dates</a>
                    <a className='btn' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGBudgetInformation?alt=media&token=6b1ea0b4-349c-4ff0-bb07-9ae1bf9ce862' download>Budget Information</a>
                </div>


            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center'>
                <div className='col-10 m-auto'>
                    <div className='text-center'>
                        <h3>ISSMA Scholastic Class A Finalists - <span className='gold-rating'>Gold Rating</span></h3>
                        <p>2022, 2021, 2017, 2016, 2015, 2014, 2013</p>
                    </div>
                    <div className='text-center'>
                        <h3>ISSMA Virtual Marching Band - <span className='gold-rating'>Gold Rating</span></h3>
                        <p>2020</p>
                    </div>
                    <div className='text-center'>
                        <h3>ISSMA Marching Band Festival - <span className='gold-rating'>Gold Rating</span></h3>
                        <p>2012, 2011, 2010, 2009, 2008, 2007</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
