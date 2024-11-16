import React, { useDebugValue, useEffect, useState } from 'react'
import Banner from '../components/images/FCHS-Band-Banner.webp'
import Crude1 from '../components/images/store/Crude1.webp'
import Crude2 from '../components/images/store/Crude2.webp'
import Crude3 from '../components/images/store/Crude3.webp'
import Crude4 from '../components/images/store/Crude4.webp'
import Crude5 from '../components/images/store/Crude5.webp'
import Crude6 from '../components/images/store/Crude6.webp'
import CrudeInfo from '../components/CrudeInfo'
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
import BondInfo from '../components/BondInfo'
import Mind1 from '../components/images/store/Mind1.webp'
import Mind2 from '../components/images/store/Mind2.webp'
import Mind3 from '../components/images/store/Mind3.webp'
import Mind4 from '../components/images/store/Mind4.webp'
import Mind5 from '../components/images/store/Mind5.webp'
import Mind6 from '../components/images/store/Mind6.webp'
import Mind7 from '../components/images/store/Mind7.webp'
import Mind8 from '../components/images/store/Mind8.webp'
import Mind9 from '../components/images/store/Mind9.webp'
import MindInfo from '../components/MindInfo'
import MultiColored1 from '../components/images/store/MultiColored1.JPG'
import MultiColored2 from '../components/images/store/MultiColored2.JPG'
import MultiColored3 from '../components/images/store/MultiColored3.JPG'
import NYNY1 from '../components/images/store/NYNY1.jpg'
import NYNY2 from '../components/images/store/NYNY2.jpg'
import NYNY3 from '../components/images/store/NYNY3.png'
import NYNY4 from '../components/images/store/NYNY4.png'
import NYNYInfo from '../components/NYNYInfo'
import Newsies1 from '../components/images/store/Newsies1.JPG'
import Newsies2 from '../components/images/store/Newsies2.JPG'
import Salem1 from '../components/images/store/Salem1.png'
import Salem2 from '../components/images/store/Salem2.png'
import Salem3 from '../components/images/store/Salem3.png'
import Salem4 from '../components/images/store/Salem4.png'
import Salem5 from '../components/images/store/Salem5.JPEG'
import SalemWitchTrialsInfo from '../components/SalemWitchTrialsInfo'
import Serpentine1 from '../components/images/store/Serpentine1.JPG'
import Serpentine2 from '../components/images/store/Serpentine2.jpeg'
import Serpentine3 from '../components/images/store/Serpentine3.jpeg'
import Serpentine4 from '../components/images/store/Serpentine4.JPG'
import Serpentine5 from '../components/images/store/Serpentine5.webp'
import Serpentine6 from '../components/images/store/Serpentine6.webp'
import Serpentine7 from '../components/images/store/Serpentine7.webp'
import SerpentineInfo from '../components/SerpentineInfo'
import NightIsLong1 from '../components/images/store/NightisLong1.JPG'
import NightIsLong2 from '../components/images/store/NightisLong2.JPG'
import NightIsLong3 from '../components/images/store/NightisLong3.webp'
import NightIsLong4 from '../components/images/store/NightisLong4.webp'
import NightIsLong5 from '../components/images/store/NightisLong5.webp'
import NightIsLong6 from '../components/images/store/NightisLong6.webp'
import NewsiesInfo from '../components/NewsiesInfo'
import MulticoloredUniformInfo from '../components/MultiColoredUniformInfo'
import NightisLongInfo from '../components/NightisLongInfo'



export default function Store() {
    const [image, setImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const getID = (event) => {
        const imageID = event.target.getAttribute("id");
        setImage(imageID);

        if (isOpen === true) {
            const IMG = document.getElementById(image)
            const parent = IMG.parentNode
            parent.className = 'store-img-div'
            setIsOpen(false)
        }
    };

    const growIMG = () => {
        const IMG = document.getElementById(image)

        if (image) {
            const parent = IMG.parentNode
            if (parent.className === 'store-img-div') {
                parent.className = 'store-img-div-grow'
                setIsOpen(true)
            } else {
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
                <h2>Deja Vu Costume</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-3' src={DejaVu1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-4' src={DejaVu2} /></div>
                </div>
            </div>
            <div className='store-2'>
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
            <div className='store-1'>
                <h2>The Name is Bond</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-11' src={Bond2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-12' src={Bond3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-13' src={Bond4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-14' src={Bond5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-15' src={Bond1} /></div>
                </div>
                <BondInfo />
            </div>
            <div className='store-2'>
                <h2>Multi-Colored Uniforms</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-16' src={MultiColored1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-17' src={MultiColored2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-18' src={MultiColored3} /></div>
                </div>
                <MulticoloredUniformInfo />
            </div>
            <div className='store-1'>
                <h2>New York, New York</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-19' src={NYNY1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-20' src={NYNY2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-21' src={NYNY3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-22' src={NYNY4} /></div>
                </div>
                <NYNYInfo />
            </div>
            <div className='store-2'>
                <h2>Newsies Style Uniforms</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-23' src={Newsies1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-24' src={Newsies2} /></div>
                </div>
                <NewsiesInfo />
            </div>
            <div className='store-1'>
                <h2>Salem Witch Trials</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-25' src={Salem1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-26' src={Salem2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-27' src={Salem3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-28' src={Salem4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-29' src={Salem5} /></div>
                </div>
                <SalemWitchTrialsInfo />
            </div>
            <div className='store-2'>
                <h2>Serpentine</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-35' src={Serpentine1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-36' src={Serpentine2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-37' src={Serpentine3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-38' src={Serpentine4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-52' src={Serpentine5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-53' src={Serpentine6} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-54' src={Serpentine7} /></div>
                </div>
                <SerpentineInfo />
            </div>
            <div className='store-1'>
                <h2>My Mind Holds the Key</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-45' src={Mind1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-46' src={Mind2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-47' src={Mind3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-48' src={Mind4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-52' src={Mind8} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-53' src={Mind9} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-49' src={Mind5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-50' src={Mind6} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-51' src={Mind7} /></div>

                </div>
                <MindInfo />
            </div>
            <div className='store-2'>
                <h2>When the Night is Long</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-39' src={NightIsLong1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-40' src={NightIsLong2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-41' src={NightIsLong3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-42' src={NightIsLong4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-43' src={NightIsLong5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-44' src={NightIsLong6} /></div>
                </div>
                <NightisLongInfo />
            </div>
            <div className='store-1'>
                <h2>Crude</h2>
                <div className='store-img-container'>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-55' src={Crude1} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-56' src={Crude2} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-57' src={Crude3} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-58' src={Crude4} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-59' src={Crude5} /></div>
                    <div onClick={getID} className='store-img-div'><img className='store-img' id='store-img-60' src={Crude6} /></div>
                </div>
                <CrudeInfo />
            </div>
            
        </div>
    )
}
