import React from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function TimBio() {


    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTim" aria-controls="offcanvasExample">
                Read Bio
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTim" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Tim Kosch</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>Mr. Kosch is currently in his 30 th year of teaching. Mr. Kosch is in his 16 th year as Director of
                            Bands at Franklin Community High School - starting in Franklin the year the new high school
                            was opened. Prior to teaching in Franklin, Mr. Kosch taught in the Carmel, Logansport,
                            Plymouth, Bremen, and Ottawa Hills (OH) school systems.</p>

                        <p>Mr. Kosch received both his Bachelor of Education and Masters of Music in Music Education
                            degrees from the University of Toledo (OH). As an undergraduate student, he performed with
                            numerous ensembles including the university wind ensemble, orchestra, brass choir, marching
                            band, and varsity (pep) band. Mr. Kosch was also the drum major of the University of Toledo
                            “Rocket” Marching Band. He has completed additional post-graduate work from the
                            VanderCook College of Music, the University of Miami (FL), Berkeley School of Music, and
                            Indiana University-South Bend.</p>

                        <p>Mr. Kosch is a former marching member of the Drum Corps International (DCI) World
                            Championship finalist Glassmen Drum and Bugle Corps. He marched six seasons, 1987-1992,
                            including a 1991 Macy’s Thanksgiving Day parade performance in New York City with the 400-
                            member DCI Pride of Drum Corps All-Stars. He continued with the Glassmen after his age-out
                            year as a visual instructor (1993-1996). Mr. Kosch has performed with various large and small
                            ensembles, including the Fishers Wind Symphony, Greenwood Community Band, and
                            Plymouth Community Band.</p>

                        <p>The Franklin Community High School concert, jazz, and small ensembles have consistently
                            received top ratings at Indiana State School Music Association (ISSMA) district and state
                            events. The instrumental music program has grown from one to three concert ensembles
                            during his time in Franklin. The Franklin Community High School Instrumental Music
                            Department is a twelve-time recipient of the ISSMA All-Music Award. Many of his students
                            have been selected and performed with the Indiana Bandmasters Association All-State Honor
                            Bands, Music for All Honor Ensembles, and other university and college honor ensembles, as
                            well as continuing into music education and performance careers after high school.</p>

                        <p>
                            Mr. Kosch is a member of the National Association for Music Education, Indiana Music
                            Educators Association, Indiana Bandmasters Association, and Kappa Kappa Psi. Mr. Kosch is
                            also a member of the Indiana State Teachers Association and has been active with the Franklin
                            Community Teacher Association Negotiations and Extra-Curricular Activity committees.
                        </p>

                        <p className='offcanvas-last'>Mr. Kosch lives in Indianapolis with his wife, Rejeana, and their pets - Brady, Rudy, and Ally.
                            Rejeana is a band director at Southport Middle School.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
