import React from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function AbbyBio() {


    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTim" aria-controls="offcanvasExample">
                Read Bio
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTim" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Abby Fleck</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>Ms. Fleck received her degree in Music Education from Ball State University, where she was actively 
                            involved in numerous performing and leadership organizations. Prior to teaching at the HS, Ms. Fleck 
                            was the Middle School Director of Bands for 3 years. She completed her student teaching experience in 
                            the Clark Pleasant School district. </p>

                        <p>Ms. Fleck has also worked extensively with marching band and music education programs throughout 
                            Indiana. She has served as a woodwind technician and sectional instructor for Castle High School, 
                            Whiteland Community High School, Pendleton Heights High School, and Muncie Central Schools. In 
                            addition, she has worked with the Music for All Summer Symposium, facilitating flute sectionals, 
                            mentoring students, and assisting with camp operations and clinician coordination.</p>

                        <p>Ms. Fleck remains active as a clinician and adjudicator throughout the state of Indiana. 
                            She has served as an adjudicator for Indiana State School Music Association Solo & Ensemble 
                            and Concert Organizational events and has presented as a panelist at the Midwest Conference. 
                            She is also involved with Bands of America event staff and continues to perform with the 
                            Greenwood Community Band.</p>

                        <p className='offcanvas-last'>Ms. Fleck is passionate about creating positive and meaningful musical experiences for students 
                            while building a strong culture of excellence, teamwork, and lifelong involvement in music.</p>

                    

                    </div>

                </div>
            </div>
        </div>
    )
}
