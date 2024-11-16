import React from 'react'

export default function NYNYInfo() {


    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNYNY" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNYNY" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">New York, New York</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were used in the 2020 production titled "New York."  We competed within the Indiana State Music School circuit and BOA Indianapolis Regionals.
                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>1. Bundled Items of: Tarp, Prop, and uniforms. - $5,200 ($750 savings!)<br />

                            2. Backdrops - There are 10 in total. They are 10’ x 10’ and were designed by Field & Floor FX. - $400<br />

                            3. 6 foot park benches - There are 2 in total. They were purchased from a hardware store and custom logos were added. - $500<br />

                            4. NYC Street Signs - There are 3 total. Each sign includes two street signs and connecting hardware. The poles and bases are not included. - $200<br />

                            4. Band Uniform Tops are the eMotion Tops with zippers and shoulder pads.They were custom designed by Dance Sophisticates. 65 total, sizes available upon request. - $2,200<br />

                            5. Guard Uniforms were custom designed by Dance Sophisticates. 13 total - $1,000.<br />

                            6. I Heart NY flags. 15 total. Designed by Field & Floor FX - $400<br />

                            7. Graphic art flag. Purchased through the Guard Closet - $300

                            8. Dual swing flags. 10 pair total. - $900

                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}