import React from 'react'
import MarchingBandBanner from '../components/images/FCHS-Marching-Full.webp'
import Marching1 from '../components/images/MB1.jpeg'
import Marching2 from '../components/images/MB2.jpeg'
import Marching3 from '../components/images/MB3.jpeg'

export default function MarchingBand({ MBItineraryName, MBWGIItineraryName }) {

    const fileVersion = Date.now();

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
                    <h4 className='mb-5 text-center'>The Franklin Community High School BLUE REGIMENT Marching Band is a Nine-Time ISSMA
                        Scholastic Class A Finalist - placing 2nd in 2025 - their highest placement yet. </h4>
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
                                <div className="carousel-item">
                                    <img src={Marching3} className="d-block w-100" alt="FCHS Marching Band" />
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
                        <a className='btn' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBFootballItinerary?alt=media&token=cc6d46ea-734e-4a75-b00e-729ac2a65b2d&v=${fileVersion}`}>Download</a>
                    </div>
                    <div>
                        <h2>{MBWGIItineraryName}</h2>
                        <a className='btn' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBWGIItinerary?alt=media&token=1d437222-6d73-4488-ab57-6dfcef3e5de1&v=${fileVersion}`}>Download</a>
                    </div>
                </div>
                <div className='ensemble-btns'>
                    <a className="btn nav-item dropdown">
                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Info/Forms
                        </a>
                        <div className="dropdown-menu nav-dropdown py-0">
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMarchingSeasonInfo?alt=media&token=799b1080-3fd8-4ed5-a65e-879a887c11d8&v=${fileVersion}`} download>2026 Marching Season Information</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGImportantDates?alt=media&token=5f2fe224-fd3d-4aa7-821c-07fc3be5cb7f&v=${fileVersion}`} download>MB/CG Important Dates</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGBudgetInformation?alt=media&token=6b1ea0b4-349c-4ff0-bb07-9ae1bf9ce862&v=${fileVersion}`} download>MB/CG Budget Information</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGFinancialCommitment?alt=media&token=129b2880-d036-41bc-8f89-594809a11328&v=${fileVersion}`} download>MB/CG Financial Commitment Form</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGMemberFee?alt=media&token=b0b8f079-a84c-47bc-98c6-112679827957&v=${fileVersion}`} download>MB/CG Member Fee Letter</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGAcknoledgment?alt=media&token=01d494e0-4ca2-4881-8e4b-54d2b8d1b4ab&v=${fileVersion}`} download>MB/CG Acknowledgement Form</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGHealthAndPermission?alt=media&token=37e38df3-a3a6-4881-a376-cecbabba535e&v=${fileVersion}`} download>MB/CG Health and Permission Forms</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FFinancialPolicy?alt=media&token=37e38df3-a3a6-4881-a376-cecbabba535e&v=${fileVersion}`} download>MB/CG Financial Policy</a>
                            <a className='dropdown-item' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FVolunteerDiscount?alt=media&token=37e38df3-a3a6-4881-a376-cecbabba535e&v=${fileVersion}`} download>MB/CG Volunteer Discount Information</a>
                        </div>
                    </a>                    <a className='btn' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGImportantDates?alt=media&token=5f2fe224-fd3d-4aa7-821c-07fc3be5cb7f&v=${fileVersion}`} download>2026 Important Dates</a>
                    <a className='btn' target='_blank' href={`https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGBudgetInformation?alt=media&token=6b1ea0b4-349c-4ff0-bb07-9ae1bf9ce862&v=${fileVersion}`} download>Budget Information</a>
                </div>


            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center'>
                <div className='col-10 m-auto'>
                    <div className='text-center'>
                        <h3>ISSMA Scholastic Class A Finalists - <span className='gold-rating'>Gold Rating</span></h3>
                        <p>2025, 2024, 2023, 2022, 2021, 2017, 2016, 2015, 2014, 2013</p>
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
