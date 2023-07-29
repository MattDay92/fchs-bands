import React from 'react'
import MarchingBandBanner from '../components/images/MarchingBand.jpeg'
import Guard1 from '../components/images/FCHS-Guard-1.jpeg'


export default function ColorGuard() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' src={MarchingBandBanner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title'>Color Guard</h1>
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
                <div className='ensemble-column-2 mb-5'>
                    <div className='carousel d-flex justify-content-center'>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Guard1} className="d-block w-100" alt="..." />
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
                        <h1>WGI World Championship Semi-Finalist</h1>
                        <h3>2019</h3>
                    </div>
                    <div className='text-center'>
                        <h3>WGI Regional Finalist</h3>
                        <p>2019, 2017</p>
                    </div>
                    <div className='text-center'>
                        <h3>IHSCGA State Finalist</h3>
                        <p>2022, 2019, 2016, 1993</p>
                    </div>
                    <div className='text-center'>
                        <h3>IHSCGA State Semi-Finalist</h3>
                        <p>2020</p>
                    </div>
                    <div className='text-center'>
                        <h3>Divisional Finals - <span className='gold-rating'>Gold Ratings</span></h3>
                        <p>2014, 2013, 2010, 2009, 2008</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
