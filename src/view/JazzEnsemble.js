import React from 'react'
import MarchingBandBanner from '../components/images/MarchingBand.jpeg'
import DrumLine from '../components/images/Drumline.jpeg'
import Saxophones from '../components/images/Saxophones.jpeg'
import Trumpets from '../components/images/Trumpets.jpeg'

export default function JazzEnsemble() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' src={MarchingBandBanner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title'>Jazz Ensemble</h1>
                </div>
            </div>
            <div className='row ensemble-info col-10'>
                <div className='ensemble-column-1'>
                    <h4 className='mb-5 text-center'>The 2022 BLUE REGIMENT Marching Band season was the most successful in Franklin's history placing
                        6th at the ISSMA Scholastic Finals - just missing a TOP 5 placement!</h4>
                    <p>Adipisicing sit id labore velit. Ipsum qui esse ipsum dolore nisi dolor eu. Sit ex velit sit velit
                        Lorem labore aute non. Cupidatat veniam fugiat cupidatat veniam ullamco veniam exercitation.
                        Commodo do aliqua magna labore consectetur reprehenderit. Esse commodo consectetur sint enim
                        enim voluptate incididunt tempor sit do est non Lorem.
                    </p>
                </div>
                {/* <div className='ensemble-column-1 mb-5'>
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
                </div> */}
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
        </div>
    )
}