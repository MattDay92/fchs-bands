import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/images/Logo.png'
import DrumMajor from '../components/images/DrumMajor.png'
import Background from '../components/images/Band-Background.png'
import Freddys from '../components/images/Freddys-Logo.webp'
import Anytime from '../components/images/Anytime-Fitness-logo.webp'
import Cunningham from '../components/images/Cunningham-Restaurant-Group.webp'
import Locke from '../components/images/Locke-Business-Ad.webp'
import Pax from '../components/images/PAX.webp'

export default function Home() {
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
                    <a className='nav-icon'><i className="fa-regular fa-flag"></i></a>
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
                    <a className='nav-icon'><i class="fa-solid fa-microphone"></i></a>
                    <h5 className='my-2'>Event Volunteer Sign-Up</h5>
                </div>
                <div className='nav-icon-div col'>
                    <a className='nav-icon' href='http://localhost:3000/2023-2024-Sponsorship-Form.pdf' download><i class="fa-solid fa-drum"></i></a>
                    <h5 className='my-2'>Sponsorship Info</h5>
                </div>
                <div className='nav-icon-div col'>
                    <Link to={'/getinvolved'} className='nav-icon'><i class="fa-solid fa-drum"></i></Link>
                    <h5 className='my-2'>Parents - Get Involved!</h5>
                </div>
            </div>
            {/* <div id='students-of-the-month' className='students-of-the-month col-10 m-auto text-center'>
                <h1 className='my-5'>Congratulations to Our Students of the Month!</h1>
                <div className='row d-flex justify-content-around align-items-center' >
                    <div className='featured-student'></div>
                    <div className='featured-student'></div>
                    <div className='featured-student'></div>
                </div>
            </div> */}
            <div id='join' className='join text-center d-flex align-items-center'>
                <div className='col-10 m-auto'>
                    <h1>Are you interested in joining the high school concert bands, jazz band,
                        and marching band?
                    </h1>
                    <h3>Click <a className='join-link' href='https://www.joinfranklinbands.info/' target='_blank'>HERE</a> to visit the <strong>Join Franklin Band</strong> website
                        for more information about the bands and how to sign up for classes!</h3>
                </div>
            </div>
            <div id='sponsors' className='sponsors m-auto text-center'>
                <h1 className='sponsor-heading pt-3'>Thank You to Our 2023-2024 Sponsors!</h1>
                <div className='sponsors-1 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h2 className='my-5'>Maestro - $1500+</h2>
                        <div className='all-sponsors'>
                            <div className='my-auto sponsor-div'><img className='sponsor-img' src={Anytime} /></div>
                            <div className='my-auto sponsor-div'><img className='sponsor-img' src={Pax} /></div>
                            <div className='my-auto sponsor-div'><img className='sponsor-img' src={Locke} /></div>
                            <div className='my-auto sponsor-div'><img className='sponsor-img' src={Freddys} /></div>
                        </div>
                    </div>
                </div>
                <div className='sponsors-2 d-flex align-items-center'>
                    <div className='m-auto col-10'>
                        <h2 className='my-5'>Drum Major - $500+</h2>
                        <div className='all-sponsors'>
                            <div className='my-auto sponsor-div'><img className='sponsor-img' src={Cunningham} /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
