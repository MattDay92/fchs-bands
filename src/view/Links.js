import React from 'react'

export default function Links() {
    return (
        <div className='main'>
            <div id='hero' className='row other-hero-container'>
                <img className='other-banner' />
                <div className='other-hero-box'>
                    <h1 className='other-hero-title'>Helpful Links</h1>
                </div>
            </div>
            <div className='links-info'>
                <div className='link-column-1'>
                    <div className='mb-5'>
                        <h3>Paige's Music</h3>
                        <a href='https://www.paigesmusic.com' className='links-link' target='_blank'><h5>Paige's Music (Instruments)</h5></a>
                        <a href='https://www.paigesmusic.com/paiges/service' className='links-link' target='_blank'><h5>Paige's Music (Service Requests)</h5></a>
                    </div>
                    <div className='mt-5'> 
                        <h3>Other Resources</h3>
                        <a href='https://www.musictheory.net' className='links-link' target='_blank'><h5>MusicTheory.net (Online Music Lessons)</h5></a>
                        <a href='https://www.musictechteacher.com' className='links-link' target='_blank'><h5>MusicTechTeacher.com (Online Drills)</h5></a>
                        <a href='https://www.musicracer.com' className='links-link' target='_blank'><h5>Music Racer (Online Drills)</h5></a>
                    </div>
                </div>
                <div className='link-column-2'>
                    <h3>Music/Arts Organizations</h3>
                    <a href='https://www.issma.net' className='links-link' target='_blank'><h5>Indiana State School Music Association (ISSMA)</h5></a>
                    <a href='https://www.indianabandmasters.org' className='links-link' target='_blank'><h5>Indiana Bandmasters Association (IBA)</h5></a>
                    <a href='https://www.imeamusic.org' className='links-link' target='_blank'><h5>Indiana Music Educators Association (IMEA)</h5></a>
                    <a href='https://www.nafme.org' className='links-link' target='_blank'><h5>National Association for Music Education (NAfME)</h5></a>
                    <a href='https://www.musicforall.org' className='links-link' target='_blank'><h5>Music for All/Bands of America (MFA/BOA)</h5></a>
                    <a href='https://www.dci.org' className='links-link' target='_blank'><h5>Drum Corps International (DCI)</h5></a>
                    <a href='https://www.ihscga.org' className='links-link' target='_blank'><h5>Indiana High School Color Guard Association (IHSCGA)</h5></a>
                    <a href='https://www.wgi.org' className='links-link' target='_blank'><h5>Winter Guard International (WGI)</h5></a>
                    <a href='https://www.indianapercussion.org' className='links-link' target='_blank'><h5>Indiana Percussion Association</h5></a>
                    <a href='https://www.pasic.org' className='links-link' target='_blank'><h5>Percussive Arts Society</h5></a>
                </div>
            </div>
        </div>
    )
}
