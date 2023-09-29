import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'



export default function Nav({storage}) {
    const [fileDownload, setFileDownload] = useState('')

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
                                <a className='dropdown-item' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMarchingSeasonInfo?alt=media&token=799b1080-3fd8-4ed5-a65e-879a887c11d8'>2023 Marching Season Information</a>
                                <a className='dropdown-item' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGImportantDates?alt=media&token=5f2fe224-fd3d-4aa7-821c-07fc3be5cb7f' download>MB/CG Important Dates</a>
                                <a className='dropdown-item' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGBudgetInformation?alt=media&token=6b1ea0b4-349c-4ff0-bb07-9ae1bf9ce862' download>MB/CG Budget Information</a>
                                <a className='dropdown-item' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGFinancialCommitment?alt=media&token=129b2880-d036-41bc-8f89-594809a11328' download>MB/CG Financial Commitment Form</a>
                                <a className='dropdown-item' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGMemberFee?alt=media&token=b0b8f079-a84c-47bc-98c6-112679827957' download>MB/CG Member Fee Letter</a>
                                <a className='dropdown-item' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGAcknoledgment?alt=media&token=01d494e0-4ca2-4881-8e4b-54d2b8d1b4ab' download>MB/CG Acknoledgment Form</a>
                                <a className='dropdown-item' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGHealthAndPermission?alt=media&token=37e38df3-a3a6-4881-a376-cecbabba535e' download>MB/CG Health and Permission Forms</a>
                            </div>
                        </a>
                        <a className='nav-item'><Link to={'/links'} className="nav-link">Links</Link></a>
                        <a className='nav-item'><Link to={'/equipmentsales'} className="nav-link">Equipment Sales</Link></a>
                        <a className='nav-item'><Link to={'/staff'} className="nav-link">Contact</Link></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
