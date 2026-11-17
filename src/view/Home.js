import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/images/Logo.webp'
import DrumMajor from '../components/images/DrumMajor.webp'
import Background from '../components/images/FCHS-Band-Banner.webp'
import Beck from '../components/images/sponsors/Beck.png'
import ChickFilA from '../components/images/sponsors/ChickFilA.png'
import CraneCredit from '../components/images/sponsors/CraneCredit.jpg'
import DT from '../components/images/sponsors/DT.png'
import HFI from '../components/images/sponsors/HFI.jpg'
import Hometown from '../components/images/sponsors/HometownNutrition.JPG'
import InnovativePercussion from '../components/images/sponsors/InnovativePercussion.png'
import IUCredit from '../components/images/sponsors/IUCreditUnion.jpg'
import JCF from '../components/images/sponsors/JCF.png'
import JCREMC from '../components/images/sponsors/JCREMC.png'
import Knauf from '../components/images/sponsors/Knauf.jpeg'
import Locke from '../components/images/sponsors/Locke.png'
import Lowes from '../components/images/sponsors/Lowes.png'
import Mayfield from '../components/images/sponsors/Mayfield.png'
import OptimalHealth from '../components/images/sponsors/OptimalHealth.png'
import Pearl from '../components/images/sponsors/PearlAdams.png'
import Radius from '../components/images/sponsors/Radius.jpg'
import Remo from '../components/images/sponsors/Remo.png'
import TeamRehab from '../components/images/sponsors/TeamRehab.jpg'
import TitleAlliance from '../components/images/sponsors/TitleAlliance.png'
import Zarrinnegar from '../components/images/sponsors/Zarrinnegar.png'
import Zildjian from '../components/images/sponsors/Zildjian.png'
import Carousel1 from '../components/images/HomeBand1.jpeg'
import Carousel2 from '../components/images/HomeBand2.jpeg'
import Carousel3 from '../components/images/HomeBand3.jpeg'
import Carousel4 from '../components/images/HomeBand4.jpeg'
import popupIMG from '../components/images/DirectorHiringPost.webp'

import FeaturedIMG from '../components/images/MilesToDayton.png'
import { getDatabase, onValue, ref } from 'firebase/database'

export default function Home({ signUpLink, getSignUpLink, showPopUp, closeAd }) {


    return (
        <>

        {/* {showPopUp === true ? <>
        <div id='popup'>
          <div className='row concert-ad'>
            <button className='popup-close-btn' onClick={closeAd}><i class="fa-solid fa-x"></i></button>
            <div className='col-6 popup-img'>
              <img className='popup-logo' alt='Dine to Donate' src={popupIMG} />
            </div>
            <div className='col-4 popup-info text-center'>
              <h3 className='text-white'>Dine to Donate</h3>
              <h4>Thursday, 2/26</h4>
              <p>Eat at Noble Roman's in Franklin on Thursday, 2/26 from 11AM to 9:30 PM to support FCHS Choirs!</p>

              <a className='btn my-2' href='https://docs.google.com/document/d/1--b9XaXt6B63cZLuB4LnMZoiJLOpj3oEweOQjCO5WJs/edit?tab=t.0' target='_blank'>More Information</a>

            </div>
          </div>
        </div>
      </>
        :
        <></>
      } */}
            <div id='hero' className='row home-hero hero-container'>
                <img className='banner' src={Background} />
                <div className='hero-box'>
                    <img className='hero-logo' src={Logo} />
                    <h1 className='hero-title'>Franklin Community High School Bands</h1>
                    <h2 className='hero-subtitle'>13-Time ISSMA All-Music Award Recipient</h2>
                </div>
                <div className='hero-image-div'>
                    <img className='hero-image' src={DrumMajor} />
                </div>
            </div>
            <div id='nav-icons' className='row nav-icons px-5'>
                <div className='nav-icon-div col-4'>
                    <Link to={'/calendar'} className='nav-icon'><i className="fa-regular fa-calendar-days"></i></Link>
                    <h5 className='my-2'>Calendar</h5>
                </div>
                <div className='nav-icon-div col-4'>
                    <Link to={'/marchingband'} className='nav-icon'><i className="fa-regular fa-flag"></i></Link>
                    <h5 className='my-2'>Marching Band Info</h5>
                </div>
                <div className='nav-icon-div col-4'>
                    <Link to={'/fees'} className='nav-icon'><i class="fa-solid fa-money-bill-wave"></i></Link>
                    <h5 className='my-2'>Pay Fees</h5>
                </div>
                <div className='nav-icon-div col'>
                    <Link to={'/staff'} className='nav-icon'><i class="fa-solid fa-people-group"></i></Link>
                    <h5 className='my-2'>Contact</h5>
                </div>
                {/* <div className='nav-icon-div col'>
                    <a className='nav-icon'><i className="fa-solid fa-info"></i></a>
                    <h5 className='my-2'>Volunteer Background Check</h5>
                </div> */}
                <div className='nav-icon-div col'>
                    <a className='nav-icon' href={signUpLink} target='_blank'><i class="fa-solid fa-microphone"></i></a>
                    <h5 className='my-2'>Event Volunteer Sign-Up</h5>
                </div>
                <div className='nav-icon-div col'>
                    <a className='nav-icon' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FSponsorship?alt=media&token=7fb5081f-a9b3-45eb-ad53-fbb5ed6f4dda' download><i class="fa-solid fa-dollar-sign"></i></a>
                    <h5 className='my-2'>Sponsorship Info</h5>
                </div>
                <div className='nav-icon-div col'>
                    <Link to={'/getinvolved'} className='nav-icon'><i class="fa-solid fa-drum"></i></Link>
                    <h5 className='my-2'>Parents - Get Involved!</h5>
                </div>
            </div>
            {/* <div id='featured' className='featured text-center d-flex align-items-center'>
                <div className='featured-content'>
                    <div className='featured-col-left'>
                        <img className='my-5' alt='Miles to Dayton Image' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMilesToDaytonIMG?alt=media&token=719b9121-eed5-47c8-8864-ac1f3421474c' />
                    </div>
                    <div className='featured-col-right'>
                        <h1>Support Franklin Indoor Percussion!</h1>
                        
                        <p>Did you know? It takes over $150,000 in operating expenses to keep the instrumental music department going each year? </p>
                        <p>This season’s Drum-A-Thon is the kickoff to our 2025 indoor percussion season and will hopefully be one of our largest fundraising
                            opportunities of the year!</p>                        
                        
                        <a className='btn my-3' href='https://quickclick.com/r/sraxht75w01aihl1iu1rw2hof1yewt' target='_blank'>Make Online Donation</a>
                    </div>
                </div>
            </div> */}

            <div id='home-photos' className='home-photos'>
                <div id="carouselExampleIndicators" class="carousel carousel-home slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Carousel1} class="carousel-home-img d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Carousel2} class="carousel-home-img d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Carousel3} class="carousel-home-img d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Carousel4} class="carousel-home-img d-block" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <div id='join' className='join text-center d-flex align-items-center'>
                <div className='col-10 m-auto'>
                    <h2 className='home-section-heading'>Are you interested in joining the high school concert bands, jazz band,
                        and marching band?
                    </h2>
                    <h3>Click <a className='join-link' href='https://www.joinfranklinbands.info/' target='_blank'>HERE</a> to visit the <strong>Join Franklin Band</strong> website
                        for more information about the bands and how to sign up for classes!</h3>
                </div>
            </div> */}
            <div id='sponsors' className='sponsors m-auto text-center'>
                <h2 className='home-section-heading pt-3 my-0'>Thank You to Our 2026-2027 Sponsors!</h2>
                <div className='sponsors-1 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h3 className='sponsor-category'>Gold - $1,500+</h3>
                        <div className='all-sponsors'>
                            <div className='sponsor-div'><img className='sponsor-img' src={Locke} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Beck} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Knauf} /></div>
                        </div>
                    </div>
                </div>
                <div className='sponsors-2 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h3 className='sponsor-category'>Silver - $1,000+</h3>
                        <div className='all-sponsors'>
                            <div className='sponsor-div'><img className='sponsor-img' src={Zarrinnegar} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Radius} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={ChickFilA} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Hometown} /></div>
                            
                        </div>
                    </div>
                </div>
                <div className='sponsors-3 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h3 className='sponsor-category'>Bronze - $500+</h3>
                        <div className='all-sponsors'>
                            <div className='sponsor-div'><img className='sponsor-img' src={TeamRehab} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Lowes} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={OptimalHealth} /></div>
                        </div>
                    </div>
                </div>
                <div className='sponsors-4 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h3 className='sponsor-category'>Supporter - $250+</h3>
                        <div className='all-sponsors'>
                            <div className='sponsor-div'><img className='sponsor-img' src={CraneCredit} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={HFI} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={DT} /></div>
                        </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}
