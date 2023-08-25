import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>
                        FCHS Bands
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
                        {/* <a className='nav-item'><Link to={'/joinus'} className="nav-link active" aria-current="page" >Join Us!</Link></a> */}
                        <a className='nav-item'><Link to={'/fees'} className="nav-link active">Fees/Payments</Link></a>
                        <a className='nav-item'><Link to={'/calendar'} className="nav-link">Calendar</Link></a>
                        {/* <a className='nav-item'><Link className="nav-link">Itineraries</Link></a> */}
                        <a className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ensembles
                            </a>
                            <div className="dropdown-menu nav-dropdown py-0">
                                <Link to={'/concertband'} className="dropdown-item">Concert Band</Link>
                                <Link to={'/symphonicband'} className="dropdown-item">Symphonic Band</Link>
                                <Link to={'/windensemble'} className="dropdown-item">Wind Ensemble</Link>
                                <Link to={'/jazzensemble'} className="dropdown-item">Jazz Ensemble</Link>
                                <Link to={'/colorguard'} className="dropdown-item">Color Guard</Link>
                                <Link to={'/marchingband'} className="dropdown-item">Marching Band</Link>
                                <Link to={'/indoorpercussion'} className="dropdown-item">Indoor Percussion</Link>
                                <a className="dropdown-item disabled">Middle School</a>
                            </div>
                        </a>
                        <a className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Info/Forms
                            </a>
                            <div className="dropdown-menu nav-dropdown py-0">
                                <a className='dropdown-item' target='_blank' href='http://fchs-bands.web.app/2023-Marching-Fall-Overview.pdf' download>2023 Marching Season Information</a>
                                <a className='dropdown-item' target='_blank' href='http://fchs-bands.web.app/2023-Marching-Important-Dates.pdf' download>MB/CG Important Dates</a>
                                <a className='dropdown-item' target='_blank' href='http://fchs-bands.web.app/2023-Marching-Budget-Info.pdf' download>MB/CG Budget Information</a>
                                <a className='dropdown-item' target='_blank' href='http://fchs-bands.web.app/2023-Marching-Financial-Commitment-Form.pdf' download>MB/CG Financial Commitment Form</a>
                                <a className='dropdown-item' target='_blank' href='http://fchs-bands.web.app/2023-Member-Fee-Letter-and-Coupons.pdf' download>MB/CG Member Fee Letter</a>
                                <a className='dropdown-item' target='_blank' href='http://fchs-bands.web.app/2023-Forms-Acknowledgement.pdf' download>MB/CG Acknoledgment Form</a>
                                <a className='dropdown-item' target='_blank' href='http://fchs-bands.web.app/2023-Marching-Health-Permission-Information-Form.pdf' download>MB/CG Health and Permission Forms</a>

                            </div>
                        </a>
                        <a className='nav-item'><Link to={'/links'} className="nav-link">Links</Link></a>
                        <a className='nav-item'><Link to={'/staff'} className="nav-link">Contact</Link></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
