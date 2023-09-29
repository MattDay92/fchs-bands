import React from 'react'

export default function NewsiesInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNewsies" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNewsies" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Newsies-Style Uniforms</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The uniforms below were used in the 2017 production titled "Hands." They are in good condition.
                            Uniform sizes can be shared upon request. Sales are managed on a first come/first served basis. We'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact if interested!
                        </p>

                        <p>hammondwoodj@franklinschools.org</p>


                        <p className='offcanvas-last'>23 pieces ($25/each) - $575 <br />
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}