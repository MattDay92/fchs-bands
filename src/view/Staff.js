import React from 'react'
import Banner from '../components/images/FCHS-Band-Banner.webp'
import Tim from '../components/images/TimHeadshot.webp'
import Jason from '../components/images/JasonHeadshot.webp'
import Hannah from '../components/images/Hannah.webp'
import JasonBio from '../components/JasonBio'
import TimBio from '../components/TimBio'
import ColorGuardBio from '../components/ColorGuardBio'

export default function Staff() {
    return (
        <div className='main'>
            <div className='row staff-hero-container'>
                <img className='banner' alt='FCHS Bands Background Image' src={Banner} />
                <div className='ensemble-hero-box'>
                    <h1 className='staff-hero-title'>Contact</h1>
                </div>
            </div>
            <div className='staff2 m-auto py-5 d-flex justify-content-around align-items-center'>
                <div className='headshot-div'>
                    <img className='headshot-staff2' alt='Tim Kosch - Director of Bands' src={Tim} />
                </div>
                <div className='staff-info text-center'>
                    <h2>Tim Kosch</h2>
                    <h3>Director of Bands</h3>
                    <p>Email: koscht@franklinschools.org</p>
                    <p>Phone:  (317) 346-8107  -  Office</p>
                    <TimBio />
                </div>
            </div>
            <div className='staff1 m-auto py-5 d-flex justify-content-around align-items-center'>
                <div className='headshot-div'>
                    <img className='headshot-staff' alt='Jason Hammond-Wood - Band Director' src={Jason} />
                </div>
                <div className='staff-info text-center'>
                    <h2>Jason Hammond-Wood</h2>
                    <h3>Band Director</h3>
                    <p>Email: hammondwoodj@franklinschools.org</p>
                    <p>Phone:  (317) 346-8144  -  Office</p>
                    <JasonBio />
                </div>
            </div>
            <div className='staff2 m-auto py-5 d-flex justify-content-around align-items-center'>
            <div className='headshot-div'>
                    <img className='headshot-staff2' alt='Hannah Para - Color Guard Director' src={Hannah} />
                </div>
                <div className='staff-info text-center'>
                    <h2>Hannah Para</h2>
                    <h3>Color Guard Director</h3>
                    <p>Email: parah@franklinschools.org</p>
                    <ColorGuardBio />
                </div>
            </div>
            <div className='boosters py-5 d-flex justify-content-around align-items-center'>
                <div className='text-center'>
                    <h1 className='mb-5'>2025-2026 Band Boosters Executive Committee</h1>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>President</h3>
                            <p>Scott Stillabower</p>
                            <p>president.franklinbands@gmail.com</p>
                        </div>
                        
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>Treasurer/Past President</h3>
                            <p>Brandy Koeppe</p>
                            <p>treasurer.franklinbands@gmail.com</p>

                        </div>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>President-Elect</h3>
                            <p>Danielle Spears</p>
                            <p>presidentelect.franklinbands@gmail.com</p>

                        </div>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>Secretary</h3>
                            <p>Dyan McQuinn</p>
                            <p>secretary.franklinbands@gmail.com</p>

                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
