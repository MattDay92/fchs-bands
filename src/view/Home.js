import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/images/Logo.webp'
import DrumMajor from '../components/images/DrumMajor.webp'
import Background from '../components/images/FCHS-Band-Banner.webp'
import Freddys from '../components/images/Freddys-Logo.webp'
import Anytime from '../components/images/Anytime-Fitness-logo.webp'
import Cunningham from '../components/images/Cunningham-Restaurant-Group.webp'
import Locke from '../components/images/Locke-Business-Ad.webp'
import Pax from '../components/images/PAX.webp'
import Carousel1 from '../components/images/Marching-Home-Carousel.webp'
import Carousel2 from '../components/images/FCHS-Marching-Full-2-Home-Carousel.webp'
import Carousel3 from '../components/images/FCIP-WGI-Home-Carousel.webp'
import FeaturedIMG from '../components/images/DonationGraphic.png'
import { getDatabase, onValue, ref } from 'firebase/database'

export default function Home({ signUpLink, getSignUpLink }) {


    return (
        <>
            <div id='hero' className='row home-hero hero-container'>
                <img className='banner' src={Background} />
                <div className='hero-box'>
                    <img className='hero-logo' src={Logo} />
                    <h1 className='hero-title'>Franklin Community High School Bands</h1>
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
                <div className='nav-icon-div col'>
                    <a className='nav-icon'><i className="fa-solid fa-info"></i></a>
                    <h5 className='my-2'>Volunteer Background Check</h5>
                </div>
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
            <div id='featured' className='featured text-center d-flex align-items-center'>
                <div className='featured-content'>
                    <div className='featured-col-left'>
                        <img className='w-100' alt='Franklin Bands Program Donation' src={FeaturedIMG} />
                        <a className='btn my-3' href='https://quickclick.com/r/7g6mt' target='_blank'>Make Online Donation</a>
                    </div>
                    <div className='featured-col-right'>
                        <h4>Did you know? It takes over $150,000 in operating expenses to keep the instrumental music department going each year? </h4>
                        <p>The funds raised by the Franklin Community Schools Band Boosters are used for competition entry fees, meals, uniform upkeep, 
                            transportation, guest instructors, scholarships, and so much more that goes on behind the scenes to keep our program operating. 
                            Donate now to help out all the Franklin bands! </p>
                    </div>
                </div>
            </div>

            <div id='home-photos' className='home-photos'>
                <div id="carouselExampleIndicators" class="carousel carousel-home slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
            <div id='join' className='join text-center d-flex align-items-center'>
                <div className='col-10 m-auto'>
                    <h2 className='home-section-heading'>Are you interested in joining the high school concert bands, jazz band,
                        and marching band?
                    </h2>
                    <h3>Click <a className='join-link' href='https://www.joinfranklinbands.info/' target='_blank'>HERE</a> to visit the <strong>Join Franklin Band</strong> website
                        for more information about the bands and how to sign up for classes!</h3>
                </div>
            </div>
            <div id='sponsors' className='sponsors m-auto text-center'>
                <h2 className='home-section-heading pt-3 my-0'>Thank You to Our 2023-2024 Sponsors!</h2>
                <div className='sponsors-1 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h3 className='sponsor-category'>Maestro - $1500+</h3>
                        <div className='all-sponsors'>
                            <div className='sponsor-div'><img className='sponsor-img' src={Anytime} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Pax} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Locke} /></div>
                            <div className='sponsor-div'><img className='sponsor-img' src={Freddys} /></div>
                        </div>
                    </div>
                </div>
                <div className='sponsors-2 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h3 className='sponsor-category'>Drum Major - $500+</h3>
                        <div className='all-sponsors'>
                            <div className='sponsor-div'><img className='sponsor-img' src={Cunningham} /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
