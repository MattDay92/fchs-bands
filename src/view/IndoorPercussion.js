import React from 'react'
import MarchingBandBanner from '../components/images/MarchingBand.jpeg'
import DrumLine from '../components/images/Drumline.jpeg'
import Saxophones from '../components/images/Saxophones.jpeg'
import Trumpets from '../components/images/Trumpets.jpeg'

export default function IndoorPercussion() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' src={MarchingBandBanner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title'>Percussion</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10 m-auto d-flex justify-content-between'>
                <div className='col-5'>
                    <h4 className='mb-5 text-center'>The 2022 BLUE REGIMENT Marching Band season was the most successful in Franklin's history placing
                        6th at the ISSMA Scholastic Finals - just missing a TOP 5 placement!</h4>
                    <p>Adipisicing sit id labore velit. Ipsum qui esse ipsum dolore nisi dolor eu. Sit ex velit sit velit
                        Lorem labore aute non. Cupidatat veniam fugiat cupidatat veniam ullamco veniam exercitation.
                        Commodo do aliqua magna labore consectetur reprehenderit. Esse commodo consectetur sint enim
                        enim voluptate incididunt tempor sit do est non Lorem.
                    </p>
                </div>
                <div className='col-5 mb-5 d-flex align-items-center'>
                    <div className='carousel d-flex justify-content-center'>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={DrumLine} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Saxophones} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Trumpets} className="d-block w-100" alt="..." />
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
                <p className='col-12'>Adipisicing sit id labore velit. Ipsum qui esse ipsum dolore nisi dolor eu. Sit ex velit sit velit
                    Lorem labore aute non. Cupidatat veniam fugiat cupidatat veniam ullamco veniam exercitation.
                    Commodo do aliqua magna labore consectetur reprehenderit. Esse commodo consectetur sint enim
                    enim voluptate incididunt tempor sit do est non Lorem.
                </p>
                <p className='col-12 mb-5'>Adipisicing sit id labore velit. Ipsum qui esse ipsum dolore nisi dolor eu. Sit ex velit sit velit
                    Lorem labore aute non. Cupidatat veniam fugiat cupidatat veniam ullamco veniam exercitation.
                    Commodo do aliqua magna labore consectetur reprehenderit. Esse commodo consectetur sint enim
                    enim voluptate incididunt tempor sit do est non Lorem.
                </p>

            </div>
            <div className='ensemble-awards d-flex align-items-center justify-content-center py-5'>
                <div className='col-10 m-auto'>
                    <div className='text-center'>
                        <h1>WGI World Championship Finalist</h1>
                        <h3>2023, 2022</h3>
                    </div>
                    <div className='text-center'>
                        <h3>WGI Regional Finalist</h3>
                        <p>2023, 2022, 2015</p>
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
                            <p>2023, 2016, 2015</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}