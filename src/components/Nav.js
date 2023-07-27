import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/Logo.png'

export default function Nav() {
    return (
        <div className='nav'>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={'/'}>
                        FCHS Bands
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
                        {/* <a className='nav-item'><Link to={'/joinus'} class="nav-link active" aria-current="page" >Join Us!</Link></a> */}
                        <a className='nav-item'><Link to={'/fees'} class="nav-link active">Fees/Payments</Link></a>
                        <a className='nav-item'><Link to={'/calendar'} class="nav-link">Calendar</Link></a>
                        {/* <a className='nav-item'><Link class="nav-link">Itineraries</Link></a> */}
                        <a class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ensembles
                            </a>
                            <div class="dropdown-menu nav-dropdown py-0">
                                <Link to={'/concertband'} class="dropdown-item">Concert Band</Link>
                                <Link to={'/symphonicband'} class="dropdown-item">Symphonic Band</Link>
                                <Link to={'/windensemble'} class="dropdown-item">Wind Ensemble</Link>
                                <Link to={'/jazzensemble'} class="dropdown-item">Jazz Ensemble</Link>
                                <Link to={'/colorguard'} class="dropdown-item">Color Guard</Link>
                                <Link to={'/marchingband'} class="dropdown-item">Marching Band</Link>
                                <Link to={'/indoorpercussion'} class="dropdown-item">Indoor Percussion</Link>
                            </div>
                        </a>
                        <a className='nav-item'><Link class="nav-link">Info/Forms</Link></a>
                        <a className='nav-item'><Link to={'/links'} class="nav-link">Links</Link></a>
                        <a className='nav-item'><Link to={'/staff'} class="nav-link">Contact</Link></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
