import React from 'react'
import Banner from '../components/images/FCHS-Band-Banner.webp'
import Bloom1 from '../components/images/store/2019 _Bloom_ Flower & Backdrops.webp'
import Bloom2 from '../components/images/store/2019 _Bloom_ Tarp.webp'
import DejaVu1 from '../components/images/store/DejaVuFront.webp'
import DejaVu2 from '../components/images/store/DejaVuBack.webp'
import HSB1 from '../components/images/store/HSB1.webp'
import HSB2 from '../components/images/store/HSB2.webp'
import HSB3 from '../components/images/store/HSB3.webp'
import HSB4 from '../components/images/store/HSB4.webp'
import HSB5 from '../components/images/store/HSB5.webp'
import HSB6 from '../components/images/store/HSB6.webp'
import HeartShapedBoxInfo from '../components/HeartShapedBoxInfo'
import Bond1 from '../components/images/store/Bond1.webp'
import Bond2 from '../components/images/store/Bond2.webp'
import Bond3 from '../components/images/store/Bond3.webp'
import Bond4 from '../components/images/store/Bond4.webp'
import Bond5 from '../components/images/store/Bond5.webp'



export default function Store() {
    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' alt='FCHS Jazz Ensemble' src={Banner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Buy Our Stuff!</h1>
                </div>
            </div>
            <div className='store-info'>
                <h2>Interested in purchasing any of our used materials?  Email hammondwoodj@franklinschools.org for more information!</h2>
            </div>
            <div className='store-1'>
                <h2>Bloom Tarp</h2>
                <div className='store-img-container'>
                    <div className='store-img-div'><img className='store-img' src={Bloom1} /></div>
                    <div className='store-img-div'><img className='store-img' src={Bloom2} /></div>
                </div>
            </div>
            <div className='store-2'>
                <h2>Deja Vu Costume</h2>
                <div className='store-img-container'>
                    <div className='store-img-div'><img className='store-img' src={DejaVu1} /></div>
                    <div className='store-img-div'><img className='store-img' src={DejaVu2} /></div>
                </div>
            </div>
            <div className='store-1'>
                <h2>Heart-Shaped Box</h2>
                <div className='store-img-container'>
                    <div className='store-img-div'><img className='store-img' src={HSB1} /></div>
                    <div className='store-img-div'><img className='store-img' src={HSB2} /></div>
                    <div className='store-img-div'><img className='store-img' src={HSB3} /></div>
                    <div className='store-img-div'><img className='store-img' src={HSB4} /></div>
                    <div className='store-img-div'><img className='store-img' src={HSB5} /></div>
                    <div className='store-img-div'><img className='store-img' src={HSB6} /></div>
                </div>
                <HeartShapedBoxInfo />
            </div>
            <div className='store-2'>
                <h2>James Bond</h2>
                <div className='store-img-container'>
                    <div className='store-img-div'><img className='store-img' src={Bond2} /></div>
                    <div className='store-img-div'><img className='store-img' src={Bond3} /></div>
                    <div className='store-img-div'><img className='store-img' src={Bond4} /></div>
                    <div className='store-img-div'><img className='store-img' src={Bond5} /></div>
                    <div className='store-img-div'><img className='store-img' src={Bond1} /></div>
                </div>
            </div>
        </div>
    )
}
