import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'



export default function Nav({storage, signUpLink}) {
    const [fileDownload, setFileDownload] = useState('')

        const fileVersion = Date.now();


    const downloadFile = (name) => {
        const gsReference = ref(storage, `gs://fchs-bands.appspot.com/files/${name}`)

        getDownloadURL(gsReference)
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = (event) => {
                    const link = xhr.responseURL
                    setFileDownload(link)
                    const file = document.getElementById(name)
                    file.setAttribute('href', link)
                };
                xhr.open('GET', url);
                xhr.send()
            })
            .catch((error) => {
                console.log('ERROR Downloading File')
            })
    }

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
                    <div className="collapse navbar-collapse justify-content-around text-center" id="navbarNavDropdown">
                        {/* <a className='nav-item'><Link to={'/joinus'} className="nav-link active" aria-current="page" >Join Us!</Link></a> */}
                        <a className='nav-item'><Link to={'/fees'} className="nav-link active">Pay Fees</Link></a>
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
                        <a className='nav-item'><Link to={'/privateinstructors'} className="nav-link">Private Instructors</Link></a>
                        <a className='nav-item' href={signUpLink} className="nav-link" target='_blank'>Volunteer</a>
                        <a className='nav-item'><Link to={'/links'} className="nav-link">Links</Link></a>
                        <a className='nav-item'><Link to={'/equipmentsales'} className="nav-link">Equipment Sales</Link></a>
                        <a className='nav-item'><Link to={'/staff'} className="nav-link">Contact</Link></a>
                        <a className='nav-item'><Link target='_blank' to={'/tickets'} className='nav-link'>Tickets</Link></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
