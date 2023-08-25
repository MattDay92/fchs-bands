import React from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function ColorGuardBio() {


    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCG" aria-controls="offcanvasExample">
                Read Bio
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasCG" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Hannah Para</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>Ms. Hannah Para has been involved with the pageantry arts since 2009. Ms. Para
                            returns for her third year as the Director of Franklin’s guard program.</p>

                        <p>Ms. Para is a native of Avon, Indiana where she performed with the high school’s
                            color guard (2011-2014) and winter guard (2012-2015). During her color guard
                            years, the Avon Marching Black and Gold consistently finished in the top 3 at the
                            Bands of America Grand National Championships and earned two Indiana State
                            School Music Association Class A State Championships. She participated in the
                            2012 Rose Bowl Parade in Pasadena, California with the Avon Marching Black and
                            Gold. Ms. Para’s scholastic winter guard involvement includes four years of
                            marching Avon’s world guard which included finalist placements at both WGI
                            World Class World Championships and the Indiana High School Color Guard
                            Association’s State Championships.</p>

                        <p>Ms. Para continued her pageantry arts involvement after graduation marching
                            four years of drum corps, including Carolina Crown (2015) and Phantom Regiment
                            (2016-2017), and lastly as a member of the 2018 Santa Clara Vanguard – DCI
                            World Champions. Ms. Para has participated in numerous independent winter
                            participation includes Legacy Winter Guard (2016), Onyx World Guard (2017-
                            2018), and Rhythm X Indoor Percussion (2019).</p>

                        <p>Ms. Para’s teaching experience also includes notable programs such as Hamilton
                            Southeastern High School, Plainfield High School, and Whiteland Community High
                            School.</p>

                        <p>
                            Ms. Para is one of six siblings who have participated in Avon’s band and guard
                            program – her youngest two brothers who will graduate in 2024. She resides in
                            downtown Indianapolis with her fiancé, Josh Clements, who is also on Franklin’s
                            teaching staff.
                        </p>



                        <p className='offcanvas-last'>Ms. Para is excited for another great year with the Franklin Community Color
                            Guard!.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
