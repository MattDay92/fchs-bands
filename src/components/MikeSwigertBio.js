import React from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function MikeSwigertBio() {


    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMike" aria-controls="offcanvasExample">
                Read Bio
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasMike" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Mike Swigert</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>Mike graduated from Butler University in 1998 with a bachelor's degree in music education, and has 26 years of experience as a professional musician, band director, general music teacher, choir director, and private lessons instructor.  He has taught in Valparaiso, IN, South Holland IL, and Shelbyville, IN, and is currently the elementary music teacher at Webb and Union Elementary Schools here in Franklin.</p>

                        <p>Mike enjoys playing with various community groups including the Creative Grounds Fine Arts Academy in Greenwood, and in various groups within his church.  He also had an amazing opportunity to play with the Indianapolis Symphony Orchestra in 2019!</p>

                        <p>Mike loves teaching music to all levels of kids and adults and can't imagine doing anything else for a living!  While he plays all instruments, he is more of a woodwind person and focuses on flute, clarinet, and saxophone lessons. </p>

                        <p className='offcanvas-last'>In his free time he enjoys spending time with his amazing wife and 3 kids camping, hiking, playing games, and watching movies.  He also enjoys bird watching, and attending concerts when he can.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}