import React, {useDebugValue, useEffect, useState} from 'react'
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
import MultiColored1 from '../components/images/store/MultiColored1.JPG'
import MultiColored2 from '../components/images/store/MultiColored2.JPG'
import MultiColored3 from '../components/images/store/MultiColored3.JPG'
import NYNY1 from '../components/images/store/NYNY1.jpg'
import NYNY2 from '../components/images/store/NYNY2.jpg'
import NYNY3 from '../components/images/store/NYNY3.png'
import NYNY4 from '../components/images/store/NYNY4.png'
import Newsies1 from '../components/images/store/Newsies1.JPG'
import Newsies2 from '../components/images/store/Newsies2.JPG'
import Salem1 from '../components/images/store/Salem1.png'
import Salem2 from '../components/images/store/Salem2.png'
import Salem3 from '../components/images/store/Salem3.png'
import Salem4 from '../components/images/store/Salem4.png'
import Salem5 from '../components/images/store/Salem5.JPEG'
import Salem6 from '../components/images/store/Salem6.jpeg'
import SalemWitchTrialsInfo from '../components/SalemWitchTrialsInfo'





export default function Store() {
    const [image, setImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const getID = (event) => {
        const imageID = event.target.getAttribute("id");
        setImage(imageID);

        if(isOpen === true){
            const IMG = document.getElementById(image)
            const parent = IMG.parentNode
            parent.className = 'store-img-div'
            setIsOpen(false)
        }
      };

    const growIMG = () => {
        const IMG = document.getElementById(image)

        if (image){
            const parent = IMG.parentNode
            if (parent.className === 'store-img-div'){
                parent.className = 'store-img-div-grow'
                setIsOpen(true)
            }else{
                parent.className = 'store-img-div'
            }
        }
    }

    useEffect(() => {
        growIMG()
    }, [image])


    return (
        <div className='main'>
            <div id='hero' className='row ensemble-hero-container'>
                <img className='ensemble-banner' alt='FCHS Jazz Ensemble' src={Banner} />
                <div className='ensemble-hero-box'>
                    <h1 className='ensemble-hero-title-black'>Equipment Sales</h1>
                </div>
            </div>
            <div className='store-info'>
                <h2>Interested in purchasing any of our used materials?  Email hammondwoodj@franklinschools.org for more information!</h2>
            </div>
            <div className='store-1'>
                <h2>Bloom Tarp</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img id='store-img-1' className='store-img' src={Bloom1} /></div>
                    <div onClick={getID} className='store-img-div'><img id='store-img-2' className='store-img' src={Bloom2} /></div>
                </div>
            </div>
            <div className='store-2'>
                <h2>Deja Vu Costume</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-3' src={DejaVu1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-4' src={DejaVu2} /></div>
                </div>
            </div>
            <div className='store-1'>
                <h2>Heart-Shaped Box</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-5' src={HSB1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-6' src={HSB2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-7' src={HSB3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-8' src={HSB4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-9' src={HSB5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-10' src={HSB6} /></div>
                </div>
                <HeartShapedBoxInfo />
            </div>
            <div className='store-2'>
                <h2>James Bond</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-11' src={Bond2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-12' src={Bond3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-13' src={Bond4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-14' src={Bond5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-15' src={Bond1} /></div>
                </div>
            </div>
            <div className='store-1'>
                <h2>Multi-Colored Uniforms</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-16' src={MultiColored1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-17' src={MultiColored2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-18' src={MultiColored3} /></div> 
                </div>
            </div>
            <div className='store-2'>
                <h2>New York, New York</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-19' src={NYNY1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-20' src={NYNY2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-21' src={NYNY3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-22' src={NYNY4} /></div>
                </div>
            </div>
            <div className='store-1'>
                <h2>Newsies Style Uniforms</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-23' src={Newsies1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-24' src={Newsies2} /></div>
                </div>
            </div>
            <div className='store-2'>
                <h2>Salem Witch Trials</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-25' src={Salem1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-26' src={Salem2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-27' src={Salem3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-28' src={Salem4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-29' src={Salem5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-30' src={Salem6} /></div>

                </div>
                <SalemWitchTrialsInfo />
            </div>
        </div>
    )
}
