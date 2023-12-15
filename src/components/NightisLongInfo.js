import React from 'react'

export default function NightisLongInfo() {
    return (
        <div className='container'>
            <button className="btn bio-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNightisLong" aria-controls="offcanvasExample">
                More Info
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNightisLong" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">When the Night is Long</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <p>The items below were used in our 2022 production titled "When the Night is Long." We competed within the IHSCGA circuit and at a WGI Indy Regional.
                            Items may be purchased individually. I will manage this on a first come/first served basis. I'd be happy to arrange local pickup, buyer pays any shipping costs. Please feel free to contact me if interested!

                        </p>

                        <p>parah@franklinschools.org</p>


                        <p>1.  14 White/cream uniforms, velvet and sequin fabric, in almost perfect condition. Only used one season. Only small issue is that they were slightly see-through and would need white or nude undergarments. They were absolutely stunning, especially on our floor. - $1400<br />
                            2. Space/galaxy tarp, in really nice condition, normal wear and tear. 50x80. Only used for one season and a couple rehearsals the following year. -$1500 (paid $2700 new) <br />
                            3. 9 Purple/blue/gold silks, made by Dance Sophisticates, beautiful silks in great condition, only used one season. - $225 <br />
                            4. 16 White/cream/gold silks, made by Dance Sophisticates, stunning and in great condition as well, only used one season. Ended the show in a circle “moon” set, it looked incredible. -$400 <br />
                        </p>

                        <p className='offcanvas-last'>I will gladly sell all of this as a package or separately. $4500 for the entire package, or sold separately at their respective prices. </p>

                    </div>

                </div>
            </div>
        </div>
    )
}
