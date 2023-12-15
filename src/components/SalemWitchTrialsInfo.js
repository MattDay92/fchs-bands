import React from 'react'

export default function SalemWitchTrialsInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSalem" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasSalem" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Salem Witch Trials</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were use in the 2023 production titled "Trial by Fire." We competed within the Indiana Percussion Association circuit and WGI World Championships, where the program made PSO Finals.
                            Items may be purchased individually. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>1. Bundled Items of: Tarp, Podium, Props, and uniforms. - $6,000<br />
                            <s>2. Tarp is 50x80 with 6ft grid marked in image purchased through Field and Floor FX. - $1,500 </s> <br />
                            3. All props were custom made and fire torched to match show aesthetic. The fire prop was custom built to be light, durable, and complete the concept of the show. Props can be purchased separately or together. Fan Prop - $500. Desk and Podium - $100/each. <br />
                            4. Uniforms were custom designed by Dance Sophisticates They are a unitard with jacket that goes over the top (Witch dress not included). Each uniform comes with an arm buckle. 38 pieces total - $4,000 <br />
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}
