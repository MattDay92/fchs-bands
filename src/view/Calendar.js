import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import AllBandsCalendar from '../components/AllBandsCalendar';
import ConcertJazzCalendar from '../components/ConcertJazzCalendar';
import GeneralInfoCalendar from '../components/GeneralInfoCalendar';
import IndoorPercussionCalendar from '../components/IndoorPercussionCalendar';
import MarchingBandCalendar from '../components/MarchingBandCalendar';
import WinterGuardCalendar from '../components/WinterGuardCalendar';



export default function Calendar() {
    const [calendar, setCalendar] = useState('')

    return (
        <div className='main'>
            <div className='container col-10 my-5'>
                <div class="dropdown text-center">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Calendar
                    </button>
                    <ul class="dropdown-menu">
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('All') }}>All Bands</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('ConcertJazz') }}>Concert and Jazz Ensembles</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Info') }}>General Info</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('IndoorPercussion') }}>Indoor Percussion</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('MBPercussion') }}>Marching Band/Color Guard</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('WinterGuard') }}>WG Winter Guard</Link></a>
                    </ul>
                </div>
                <div className='mt-5 text-center'>
                    {calendar === 'WinterGuard' ? <><h2>Winter Guard</h2><WinterGuardCalendar /></> :
                        calendar === 'ConcertJazz' ? <><h2>Concert/Jazz Ensembles</h2><ConcertJazzCalendar /></> :
                            calendar === 'Info' ? <><h2>General Info</h2><GeneralInfoCalendar /></> :
                                calendar === 'IndoorPercussion' ? <><h2>Indoor Percussion</h2><IndoorPercussionCalendar /></> :
                                        calendar === 'MBPercussion' ? <><h2>Marching Band/Color Guard</h2><MarchingBandCalendar /></> :
                                                <><h2>All Bands</h2><AllBandsCalendar /></>
                                                }
                </div>
            </div>
        </div>
    )
}
