import React from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function TonyBio() {


    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTony" aria-controls="offcanvasExample">
                Read Bio
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTony" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Tony Lemonds</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>Tony's journey includes impactful experiences such as marching with the Blue Stars in 2009 and 2010, the Phantom Regiment Drum and Bugle Corps in 2012, and joining the front ensemble at Music City Mystique from 2011 to 2014, where he served as the section leader in 2013 and 2014.</p>

                        <p>Transitioning from marching to mentoring, Tony remained deeply connected to the activity as a Freelance instructor, composer, and designer. His leadership shone as the front ensemble caption head for Palmetto Percussion in 2015 and 2016. Tony's journey expanded as he lent his expertise to Spirit of Atlanta Drum and Bugle Corps in 2016 and the Cadets Drum and Bugle Corps in 2017, contributing to the growth and success of these esteemed ensembles. Continuing his creative journey, he brought his innovative touch as the sound designer and part of the front ensemble instructional staff at Atlanta Quest from 2017 to 2019.</p>

                        <p>Extending his passion beyond World Class ensembles, Tony shared his expertise with various high school and middle school programs in the Atlanta and Nashville areas from 2010 to 2019, contributing to the development of young percussionists. His dedication to marching arts education persisted as he returned to teach at Franklin Community High School in the spring of 2023. Tony's influence has had a positive impact, nurturing musical growth and a love for percussion among students. His focus goes beyond competition, highlighting the significance of musical education and artistic expression in the diverse realm of percussion.</p>

                        <p className='offcanvas-last'>Currently calling Franklin, Indiana, home, Tony finds joy in family life with his partner and three children. When not immersed in the world of percussion, he enjoys bowling, crafting film and TV scores, and spending time with his family.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
