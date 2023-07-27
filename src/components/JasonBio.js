import React from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function JasonBio() {


    return (
        <div className='container'>
            <button className="btn my-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Read Bio
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Jason Hammond-Wood</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>Jason Hammond-Wood holds a
                            Bachelor’s degree in Music Education
                            and a Master of Music degree from
                            Indiana State University where he
                            studied under Dr. Jimmy Finnie. While
                            in attendance at Indiana State, Jason was
                            a part of numerous performance
                            ensembles as well being and adjunct
                            faculty member.</p>

                        <p>Jason began his marching career with
                            the Glassmen Drum and Bugle Corps in
                            2003 where he performed for two
                            seasons. He was also a member of the
                            ISU Drumline, Indiana Pacers High
                            Octane Drumline and the Indianapolis
                            Colts Drumline. Jason has also
                            performed with the Terre Haute Symphony, Lafayette Symphony, and the Indianapolis
                            Chamber Orchestra.</p>

                        <p>In 2008 Jason began working within the Center Grove community schools in Greenwood,
                            Indiana as a private lessons instructor and drumline technician. His studio consisted of
                            over 40 students in grades 6-12 that took applied lessons on all percussion instruments
                            and styles. Several of his students went on to participate in the Indiana Jr. All-State Band,
                            BOA Honor Band, the Army All-American Band, as well as various DCI and WGI
                            performance ensembles.</p>

                        <p>While at Center Grove Jason helped the drumline achieve the WGI PSW Silver and
                            Bronze Medals as well as several BOA Grand National finals appearances. He was
                            involved with the percussion ensemble in their 2010 Midwest and 2011 PASIC
                            performances. In 2014 the Center Grove Band performed in the Macy’s Parade in New
                            York City. Jason also performed in Superbowl XLVI on stage with Madonna and Kelly
                            Clarkson.</p>

                        <p>
                            Jason is currently the Associate Director of Bands and Percussion Director at Franklin
                            Community High School. Since joining, the indoor percussion program has blossomed in
                            to one of the top ensembles in the nation. The ensemble has consistently made IPA State
                            Finals and WGI World Championship Finals in both the PSA and PSO divisions. The
                            concert percussion program has also flourished. Jason started an annual Night of
                            Percussion concert and a Drum-A-Thon event for solo and ensemble music to be
                            showcased. The FCS Percussion program has seen two All-State percussion award
                            winners as well.
                        </p>

                        <p>Jason previously served as President of the Indiana Percussion Association for seven
                            years. In his time on the board of directors he worked to expand the educational
                            opportunities for the association through clinician opportunities, he expanded
                            scholarships and sponsorship support, and laid the groundwork for a large scale State
                            Finals venue to culminate each season. He has also served for four years as an Advisory
                            Board member to help make executive decisions for the association.</p>

                        <p className='offcanvas-last'>Jason lives in downtown Indianapolis with his wife Heather and his three wiener dogs,
                            Dexter, Bentley and Louis. Jason proudly uses Innovative Percussion, Pearl Drums and
                            Adams percussion instruments, Remo Drumheads, and Ziljdian Cymbals.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
