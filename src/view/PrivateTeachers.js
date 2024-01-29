import React from 'react'
import Banner from '../components/images/FCHS-Band-Banner.webp'
import Tony from '../components/images/TonyLemondsHeadshot.webp'
import Jason from '../components/images/JasonHeadshot.webp'
import Hannah from '../components/images/Hannah.webp'
import JasonBio from '../components/JasonBio'
import TonyBio from '../components/TonyBio'
import ColorGuardBio from '../components/ColorGuardBio'
import MikeSwigertBio from '../components/MikeSwigertBio'

export default function Staff() {
    return (
        <div className='main'>
            <div className='row staff-hero-container'>
                <img className='banner' alt='FCHS Bands Background Image' src={Banner} />
                <div className='ensemble-hero-box'>
                    <h1 className='staff-hero-title'>Private Instructors</h1>
                </div>
            </div>
            <div className='staff2 m-auto py-5 d-flex justify-content-around align-items-center'>
                <div className='headshot-div'>
                    <img className='headshot-staff2' alt='Tony Lemonds - Private Percussion Instructor' src={Tony} />
                </div>
                <div className='staff-info text-center'>
                    <h2>Tony Lemonds</h2>
                    <h3>Private Percussion Instructor</h3>
                    <p>Email: tonylemonds@gmail.com</p>
                    <p>Phone:  615-495-6631</p>
                    <TonyBio />
                </div>
            </div>
            <div className='staff1 m-auto py-5 d-flex justify-content-around align-items-center'>
                <div className='headshot-div'>
                    <img className='headshot-staff' alt='Mike Swigert - Private Woodwind Instructor'  />
                </div>
                <div className='staff-info text-center'>
                    <h2>Mike Swigert</h2>
                    <h3>Private Woodwind Instructor</h3>
                    <p>Email: swigertm@franklinschools.org</p>
                    <MikeSwigertBio />
                </div>
            </div>
    

        </div>
    )
}