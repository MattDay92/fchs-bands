import React from 'react'
import MarchingBandBanner from '../components/images/MarchingBand.jpeg'
import Tim from '../components/images/TimHeadshot.jpg'
import Jason from '../components/images/JasonHeadshot.jpg'
import JasonBio from '../components/JasonBio'

export default function Staff() {
    return (
        <div className='main'>
            <div className='row ensemble-hero-container'>
                <img className='ensemble-banner' src={MarchingBandBanner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title'>Contact</h1>
                </div>
            </div>
            <div className='staff1 m-auto py-5 d-flex justify-content-around align-items-center'>
                <div className='headshot-div'>
                    <img className='headshot-staff' src={Tim} />
                </div>
                <div className='staff-info text-center'>
                    <h2>Tim Kosch</h2>
                    <h4>Director of Bands</h4>
                    <p>Email: koscht@franklinschools.org</p>
                    <p>Phone:  (317) 346-8107  -  Office</p>
                </div>
            </div>
            <div className='staff2 m-auto py-5 d-flex justify-content-around align-items-center'>
                <div className='headshot-div'>
                    <img className='headshot-staff2' src={Jason} />
                </div>
                <div className='staff-info text-center'>
                    <h2>Jason Hammond-Wood</h2>
                    <h4>Band Director</h4>
                    <p>Email: hammondwoodj@franklinschools.org</p>
                    <p>Phone:  (317) 346-8144  -  Office</p>
                    <JasonBio />
                </div>
            </div>
            <div className='staff1 m-auto py-5 d-flex justify-content-around align-items-center'>
            <div className='headshot-div'>
                    <img className='headshot-staff' src={Jason} />
                </div>
                <div className='staff-info text-center'>
                    <h2>Hannah Para</h2>
                    <h4>Color Guard Director</h4>
                    <p>Email: parah@franklinschools.org</p>
                </div>
            </div>
            <div className='boosters py-5 d-flex justify-content-around align-items-center'>
                <div className='text-center'>
                    <h1 className='mb-5'>2023-2024 Band Boosters Executive Committee</h1>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>President</h3>
                            <p>Ms. Pam Dillow</p>
                        </div>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>President-Elect</h3>
                            <p>Mrs. Brandi Koeppe</p>
                        </div>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>Past President</h3>
                            <p>Mrs. Brenna Joyce</p>
                        </div>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>Secretary</h3>
                            <p>Mrs. Yolanda Burgener</p>
                        </div>
                        <div className='col m-3 d-flex flex-column justify-content-between'>
                            <h3>Treasurer</h3>
                            <p>Mrs. Kerri Hoffman</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}