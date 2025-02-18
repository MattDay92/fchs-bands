import React from 'react'
import Percussion from '../components/images/Percussion.webp'
import Percussion1 from '../components/images/FCIP-WGI.webp'
import Percussion2 from '../components/images/Snare.webp'
import Percussion3 from '../components/images/Snares.webp'
import Percussion4 from '../components/images/BassDrum.webp'
import Percussion5 from '../components/images/BassDrum2.webp'
import Percussion6 from '../components/images/DSFinals.webp'
import Percussion7 from '../components/images/Cymbol.webp'
import Sponsor1 from '../components/images/2000px-Zildjian_Logo.svg.webp'
import Sponsor2 from '../components/images/IP.webp'
import Sponsor3 from '../components/images/remo-logo.webp'
import Sponsor4 from '../components/images/pearladamslogowht copy.webp'
import Finalist1 from '../components/images/WGI-Finalist-Banner1.webp'
import Finalist2 from '../components/images/WGI-Finalist-Banner2.webp'
import Finalist3 from '../components/images/HSWCBanner.webp'


export default function IndoorPercussion({ PercussionItineraryName }) {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner-done' alt='FCHS Percussion Truck' src={Percussion} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title'>Percussion</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='ensemble-column-1'>
                    <h4 className='ensemble-info-paragraph'><strong>Franklin Community Percussion is a perennial IPA State Finalist competitor. 
                        The indoor percussion program began in 2013 and has been in state finals 8 times.</strong> </h4>
                    <p className='mb-5'>n 2021 they were the State Runner-up in Class A. The program also competes at WGI 
                        World Championships. In 2022 the group received 4th place in PSA . In the 2023 and 2024 seasons the group 
                        made finals PSO placing 15th and 10th, respectively! They are a 9-time State Finalist and a 3-time WGI 
                        World Championship Finalist!
                    </p>

                </div>
                <div className='ensemble-column-2'>
                    <div className='carousel carousel-ensemble d-flex justify-content-center'>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Percussion1} alt='FCHS Percussion' className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Percussion2} alt='FCHS Percussion Snare Drummer' className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Percussion3} alt='FCHS Percussion Snare Drums' className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Percussion4} alt='FCHS Percussion Bass Drums' className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Percussion5} alt='FCHS Percussion Bass Drums' className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Percussion6} alt='FCHS Percussion Kids' className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Percussion7} alt='FCHS Percussion Cymbal Player' className="d-block w-100" />
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
            </div>
            <div className='ensemble-itinerary-btn-div m-auto text-center'>
                <div className='ensemble-itinerary-btn'>
                    <h2>{PercussionItineraryName}</h2>
                    <a className='btn' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FPercussionItinerary?alt=media&token=df5a865c-3388-4e66-bda0-27d39ae5630e'>Download</a>
                </div>
                <div>
                    <h2>Download Paperwork</h2>
                    <a className='btn' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FPercussionPaperwork?alt=media&token=6d24055d-6a93-4c00-b6f1-1ce7431bbb39'>Download</a>
                </div>
            </div>
            <div className='WGI-Banners col-10'>
                <div className='ensemble-WGI-banner-div'><img className='sponsor-img' alt='WGI Finalist Banner' src={Finalist2} /></div>
                <div className='ensemble-WGI-banner-div'><img className='sponsor-img' alt='WGI Finalist Banner' src={Finalist1} /></div>
                <div className='ensemble-WGI-banner-div'><img className='sponsor-img' alt='WGI Finalist Banner' src={Finalist3} /></div>

            </div>
            <div className='ensemble-sponsors col-10 text-center'>
                <h4 className='my-5'>Franklin Community Percussion proudly uses Innovative Percussion sticks and mallets, Pearl Drums, Adams Percussion, Remo Drumheads, and Ziljdian Cymbal products.</h4>
            </div>
            <div className='ensemble-sponsors col-10 mb-5'>
                <div className='ensemble-sponsor-div'><img className='sponsor-img' src={Sponsor1} /></div>
                <div className='ensemble-sponsor-div'><img className='sponsor-img' src={Sponsor2} /></div>
                <div className='ensemble-sponsor-div'><img className='sponsor-img' src={Sponsor3} /></div>
                <div className='ensemble-sponsor-div'><img className='sponsor-img' src={Sponsor4} /></div>
            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center py-5'>
                <div className='col-10 m-auto'>
                    <div className='text-center'>
                        <h2>WGI World Championship Finalist</h2>
                        <h3>2024, 2023, 2022</h3>
                    </div>
                    <div className='text-center'>
                        <h3>WGI Regional Finalist</h3>
                        <p>2024, 2023, 2022, 2015</p>
                    </div>
                    <div className='text-center'>
                        <h3>IPA Class A State Runner-Up</h3>
                        <p>2021</p>
                        <div className='text-center'>
                            <h3>IPA Class A State Finalist</h3>
                            <p>2022, 2021, 2019, 2018</p>
                        </div>
                        <div className='text-center'>
                            <h3>IPA Open Class State Finalist</h3>
                            <p>2024, 2023, 2016, 2015</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}