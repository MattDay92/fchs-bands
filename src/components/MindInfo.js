import React from 'react'

export default function MindInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMind" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasMind" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">My Mind Holds the Key</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were use in the 2024 production titled "My Mind Holds the Key." We competed within the Indiana Percussion Association circuit and WGI World Championships, where the program was a finalist, receiving 10th place in PSO.

                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>

                        <p>
                            1. Bundled Items of: Tarp, Prop, and uniforms. - $4,500 <br />

                            2. Tarp is 50x80 with 6ft grid marked in image purchased through Field and Floor FX. - $1,500  <br />

                            3. Box prop designed to break apart and be restaged across the floor. Breaks apart into 18 pieces of various sizes. Materials are made of a light wood for the box frame and aluminum rods for the poles. Each box is hollow to allow for batteries and lighting mechanisms used in our production. They are very light! The platform is made of aluminum and comes with a cart for transportation - $1,000  <br />

                            4. Uniforms were custom designed by Dance Sophisticates and featured in their catalog. Comes with blue fabric to wrap around arms as well as gauntlets. 44 pieces total (1 red & 43 teal) - $2,500  <br />

                        </p>
                        <p className='offcanvas-last'>5. Each prop comes with LED strips included for free. If interested in the light controllers, please reach out.  <br />
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}