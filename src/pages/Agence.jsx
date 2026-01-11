import React, { useEffect , useRef } from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';




function Agence() {
    const imageDivref = useRef(null);

    const imgref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    const imgArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',

    ]

    useGSAP(function(){


        gsap.to(imageDivref.current, {

            scrollTrigger:{
                trigger:imageDivref.current,
                markers:true,
                start:'top 26.5%',
                end: 'top -115%',
                pin:true,
                scrub:1,

                onUpdate: (elem) => {
                    let imgIdx;
                    if(elem.progress < 1){
                        imgIdx = Math.floor(elem.progress * imgArray.length)
                    }
                    else{
                        imgIdx = imgArray.length-1
                    }

                    imgref.current.src = imgArray[imgIdx];
                }
               
            }
        })
    })


    return (
        
        <div>
            <div className='section1'>
                <div ref={imageDivref} className='h-[19vw] w-[15vw] absolute top-44 rounded-3xl left-[31vw] bg-red-900 overflow-hidden'>
                    <img ref={imgref} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
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


// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// import { useRef } from 'react'

// const Agence = () => {

//   gsap.registerPlugin(ScrollTrigger)

//   const imageDivRef = useRef(null)
//   const imageRef = useRef(null)

//   const imageArray = [
//     'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
//     'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
//   ]

//   useGSAP(function () {

//     gsap.to(imageDivRef.current, {
//       scrollTrigger: {
//         trigger: imageDivRef.current,
//         // markers: true,
//         start:'top 26.5%',
//         end: 'top -115%',
//         pin: true,
//         pinSpacing: true,
//         pinReparent: true,
//         pinType: 'transform',
//         scrub: 1, // smooth scrubbing with 1s easing
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         onUpdate: (elem) => {
//           let imageIndex;
//           if (elem.progress < 1) {
//             imageIndex = Math.floor(elem.progress * imageArray.length)
//           } else {
//             imageIndex = imageArray.length - 1
//           }
//           imageRef.current.src = imageArray[imageIndex]
//         }
//       }
//     })
//   })


//   return (
        
//         <div>
//             <div className='section1'>
//                 <div ref={imageDivRef} className='h-[19vw] w-[15vw] absolute top-44 rounded-3xl left-[31vw] bg-red-900 overflow-hidden'>
//                     <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
//                 </div>
//                 <div className='font-[font1] relative'>
//                     <div className='mt-[55vh]'>
//                         <h1 className='text-[19vw] text-center leading-[17vw] uppercase'>Soixan7e <br /> Douze</h1>
//                     </div>

//                     <div className='pl-[40%] mt-3'>
//                         <p className='text-5xl '>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='section2 h-screen'>

//             </div>
//         </div>
//     )
// }
// export default Agence;
