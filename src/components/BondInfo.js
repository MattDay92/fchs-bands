import React from 'react'

export default function BondInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBond" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasBond" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">The Name is Bond</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were use in the 2022 production titled "The Name is Bond." We competed within the Indiana State Music School circuit and BOA Indianapolis Regionals.
                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>1. Bundled Items of: Tarp, Prop, and uniforms. - $5,000 ($690 savings!) <br />

                            2. Backdrops - There are 8 in total. They are 10’ x 10’ and were designed by Field & Floor FX. - $400 <br />

                            3. Briefcases - There are 7 in total. They were purchased from a hardware store and custom logos were added. - $100 <br />

                            4. Band Uniform Tops are the eMotion Tops with zippers and shoulder pads.They were custom designed by Dance Sophisticates. 62 total, sizes available upon request. - $2,500 <br />

                            5. Guard Uniforms were custom designed by Dance Sophisticates. Total band tops = 14 total with top and unitard - $1,800. <br />

                            6. Neon Green “Spectre” flags. 9 total. Designed by Field & Floor FX - $190 <br />

                            7. Red barrel flags. 15 total. Designed by Field & Floor FX - $400 <br />

                            8. Swing flags. 8 total. Purchased from the Band Shoppe - $300 <br />


                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}