import React from 'react'
import { Link } from 'react-router-dom'
import MarchingBandBanner from '../components/images/MarchingBand.webp'

export default function GetInvolved() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' src={MarchingBandBanner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Volunteer Opportunities</h1>
                </div>
            </div>
            <div className='col-10 m-auto my-5'>
                <p>We are always in need of help! The high school Instrumental Music Department has
                    TRIPLED over the past decade. Part of this growth is due to the willingness and
                    generosity of our parents and volunteers to help. A program of this size can
                    not succeed without your assistance! Whether you have only a little amount of
                    time or tons of time there are numerous volunteer opportunities available.
                </p>
                <p>
                    Parents and volunteers can also participate in our band booster organization.
                    The <span className='getinvolved-blue'>Franklin Community Schools Band Booster Organization</span> supports all instrumental
                    music programs (grades 6-12) in the Franklin Schools.  General membership meetings
                    are held the second Tuesday of the month at 7:00 pm in the high school band room.
                    Contact information for the band boosters is available <Link className='getinvolved-blue' to={'/staff'} target='_blank'>HERE</Link>.
                </p>
                <p>
                    All parents/volunteers are required to have a <span className='getinvolved-blue'>LIMITED CRIMINAL HISTORY BACKGROUND CHECK</span>
                    on file with the school corporation before assisting in any school sponsored activities.
                    Click <a href='#' className='getinvolved-blue'>HERE</a> for additional background check information.
                </p>
                <p>
                    Other volunteer opportunities and committees include assisting with marching band uniforms,
                    fundraising (corporate and general), band camp/tailgating, equipment/pit crew, prop building,
                    chaperoning, concessions, event help, publicity, the spirit committee, and more.
                    Committee descriptions and information are below.
                </p>
            </div>
            <div className='getinvolved-section2'>
                <h2 className='text-center pt-5'>Committees</h2>
                <div className='col-10 m-auto py-5'>
                    <p>
                        <span className='getinvolved-gold'>UNIFORMS</span> – This committee starts in late May/early June by organizing marching band uniforms
                        for the next season. Student fittings are done during the July band camp. Students are
                        assisted with uniforms at home football games, competitions, and parades. Uniforms are
                        inspected before students store them after performances. Following the season (or when needed)
                        uniforms are washed and inspected before storing them until the next season. This committee
                        will also assist in early November with the fitting of formal concert dresses for the concert season.
                    </p>
                    <p>
                        <span className='getinvolved-gold'>SPONSORSHIP/LOCAL FUNDRAISING</span> – This committee will call upon local businesses to sponsor/support
                        the program financially, with services, or other needed items. Local sponsors will be highlighted
                        at concerts, in concert/programs, etc. This group will also search for possible grant and matching
                        gift opportunities that could benefit the program.
                    </p>
                    <p>
                        <span className='getinvolved-gold'>STUDENT FUNDRAISING</span> – Create, organize, and operate student fundraising opportunities for members
                        to earn money/credits to help with fees, essentials, and trips.
                    </p>
                    <p>
                        <span className='getinvolved-gold'>CHAPERONE/SUPERVISION</span> – Supervise students at various band and guard events (assist with band/school rules,
                        provide supervision on buses before, during, and after competitions, etc.)
                    </p>
                    <p>
                        <span className='getinvolved-gold'>BAND CAMP/TAILGATING</span> – Help prepare items for band camp (ice water/tent during camp rehearsals, etc.)
                        and help prepare evening meals/snacks before and during home football games.
                    </p>
                    <p>
                        <span className='getinvolved-gold'>LOGISTICS/PIT CREW</span> – Help load/unload equipment, drive rental or school truck(s), and assist with
                        equipment moving at competitions and home football games.
                    </p>
                    <p>
                        <span className='getinvolved-gold'>PROPS/CONSTRUCTION</span> – Help construct and test props for shows from concepts given by the directors.


                    </p>
                    <p>
                        <span className='getinvolved-gold'>CONCESSION STAND</span> – The Concession Stand Committee works in the concession stand during home football games by preparing the space to open, greeting customers, handling payments, preparing food, distributing food as needed, counting inventory, and cleaning up afterward. Each volunteer will sign in/out at the beginning/end of each shift. Credits will be applied toward your student’s band account.
                    </p>
                    <p>
                        <span className='getinvolved-gold'>EVENTS</span> – Assist with the organization/operation of large-scale events we host (ISSMA Class D Semi-State Marching Band Competition, ISSMA Organization Festival, and IHSCGA Winter Guard Competition).
                    </p>
                    <p>
                        <span className='getinvolved-gold'>SPIRIT COMMITTEE</span> – Organize parent caravans to contests, welcoming and involving new parents/families, and any other ways to encourage enthusiasm and excitement! Assist in spirit sales (design/ordering of clothing apparel, yard signs, window decals/clings, etc.). This committee might also assist with the Varsity Jacket/Awards program.
                    </p>
                    <p>
                        <span className='getinvolved-gold'>RECRUITMENT</span> – Assist in the recruitment efforts of the Instrumental Music Department.
                    </p>
                </div>
            </div>
        </div>
    )
}
