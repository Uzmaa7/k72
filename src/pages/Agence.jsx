import React, { useRef } from 'react'
import Carl from '../assets/images/Carl_480x640.jpg'


function Agence() {
    const imageDivref = useRef(null);
    return (
        
        <div>
            <div className='section1'>
                <div ref={imageDivref} className='h-[19vw] w-[15vw] absolute top-44 rounded-3xl left-[31vw] bg-red-900 overflow-hidden'>
                    <img className='h-full w-full object-cover' src={Carl} alt="" />
                </div>
                <div className='font-[font1] relative'>
                    <div className='mt-[55vh]'>
                        <h1 className='text-[19vw] text-center leading-[17vw] uppercase'>Soixan7e <br /> Douze</h1>
                    </div>

                    <div className='pl-[40%] mt-3'>
                        <p className='text-5xl '>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                    </div>
                </div>
            </div>

            <div className='section2 h-screen'>

            </div>
        </div>
    )
}
export default Agence;