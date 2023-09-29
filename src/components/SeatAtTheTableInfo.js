import React from 'react'

export default function SeatAtTheTableInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSeatAtTheTable" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasSeatAtTheTable" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Seat At The Table</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were use in the 2020 production titled "A Seat at the Table"  We were set to compete within the Indiana Percussion Association circuit and WGI World Championships.
                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>1. Tarp is 50x80 with 6ft grid marked in image purchased through Field and Floor FX. - $350 - it is in workable condition but has been used as a practice tarp. <br />
                            2. 16 chair props and custom designed cart for travel - $600                            
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}