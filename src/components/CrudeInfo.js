import React from 'react'

export default function CrudeInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCrude" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasCrude" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Crude</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were use in the 2024 production titled "Crude." We competed within the Indiana State Music School circuit and BOA Indianapolis Regionals.
                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>1. Bundled Items of: Tarp, Prop, and uniforms. - $4,500  <br />

                            2. Tarp is 45 feet wide x 40ft long. It was cut in to shape to appear as it was “spilling out” from the bottom of the main derrick prop. - $200 <br />

                            3. Derrick Props - There are 6 props in total. The are just under 12 ft in height to meet BOA requirements. One derrick has railings and stairs for solo opportunities. - $1,000 for all six. <br />

                            4. Band Uniform Tops were custom designed by Dance Sophisticates.. Total band tops = xxx - $2,500 for all. <br />

                            5. Guard Uniforms were custom designed by Dance Sophisticates. Total band tops = xxx - $2,500 for all. <br />

                            6. Flags available <br />

                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}