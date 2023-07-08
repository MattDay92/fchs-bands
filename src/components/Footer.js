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
                <h5>2600 Cumberland Drive, Franklin, IN 46131</h5>
                <h5>(317) 346-8100</h5>
                <h5>koscht@franklinschools.org</h5>
            </div>

        </div>
    )
}
