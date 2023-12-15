import React from 'react'




export default function HeartShapedBoxInfo() {


    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHSB" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasHSB" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Heart Shaped Box</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were used in the 2022 production titled "Heart Shaped Box." We competed within the Indiana Percussion Association circuit and WGI World Championships, where the program placed 4th in PSA.
                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>1. Bundled Items of: Tarp, Heart prop, and uniforms. - $6,000 <br />
                            2. Tarp is 50x80 with 6ft grid marked in image purchased through Field and Floor FX. - $1,500 <br />
                            <s>3. Heart prop designed to break apart and be restaged across the floor. Breaks apart into 6 cubes. Each cube measures: 14in wide, 36in long, and 43in tall. Materials are made of wood for the frame and wood dowel rods for the geometric heart. - $500</s> <br />
                            4. Uniforms were custom designed by Dance Sophisticates and featured in their catalog. Comes with blue fabric to wrap around arms as well as gauntlets. 34 pieces total - $4,000 <br />
                            5. Light cubes are not for sale.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}