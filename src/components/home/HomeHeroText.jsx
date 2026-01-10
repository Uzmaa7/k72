import React from 'react'
import InlineVideo from './InlineVideo';


function HomeHeroText(){
    return(
        <div className='font-[font1] pt-4 text-center'>
            <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center  justify-center'>L'étincelle  </div>
            <div>
                <div className=' flex items-center  justify-center text-[9.5vw] uppercase leading-[8vw]'>
                    qui 
                    <div className='h-[7vw]  w-[16vw] -mt-3 rounded-full overflow-hidden'> <InlineVideo/> </div> 
                    génère 
                </div>
            </div>
            <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center  justify-center'>  la  créativité </div>
        </div>
    )
}
export default HomeHeroText;