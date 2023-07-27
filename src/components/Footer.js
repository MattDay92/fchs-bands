import React from 'react'

export default function Footer() {
    return (
        <div className='footer d-flex align-items-center justify-content-around'>
            <div id='social' className='social text-center'>
                <h1>Follow Franklin Bands!</h1>
                <div className='d-flex justify-content-around'>
                    <a href='https://www.facebook.com/FranklinCommunityHighSchoolBand' target='_blank'><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/fcs_bands/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div>
                <h4>Contact</h4>
                <a className='footer-link' target='_blank' href='https://www.google.com/maps/place/2600+Cumberland+Dr,+Franklin,+IN+46131/@39.512414,-86.0882151,17z/data=!3m1!4b1!4m6!3m5!1s0x886b68af18138de5:0xf8a45f4f29d67c4b!8m2!3d39.5124099!4d-86.0856402!16s%2Fg%2F11bw3xz1bn?entry=ttu'><h5>2600 Cumberland Drive, Franklin, IN 46131</h5></a>
                <h5>(317) 346-8100</h5>
                <h5>koscht@franklinschools.org</h5>
            </div>

        </div>
    )
}
