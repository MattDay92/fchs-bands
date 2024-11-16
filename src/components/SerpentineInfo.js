import React from 'react'

export default function SerpentineInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSerpentine" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasSerpentine" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Serpentine</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were use in the 2019 production titled "Serpentine." We competed within the Indiana State Music School circuit and BOA Indianapolis Regionals.
                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>1. Bundled Items of: Tarp, Prop, and uniforms. - $3,000 ($600 savings!)<br />

                            2. Backdrops - There are 12 in total. They are 10’ x 10’ and were designed by Field & Floor FX. - $400<br />

                            3. Band Uniform Tops are the eMotion Tops with zippers and shoulder pads.They were custom designed by Dance Sophisticates. 61 total, sizes available upon request. - $2,200<br />

                            4. Guard Uniforms were custom designed by McCormick’s. 6 green, 5 blue/white, 5 orange/red, and 5 purple. 21 total - $1,000.

                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}