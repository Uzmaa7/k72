import React from 'react';
import BackgroundVideo from '../components/home/BackgroundVideo';
import HomeBottomText from '../components/home/HomeBottomText';
import HomeHeroText from '../components/home/HomeHeroText';

function Home(){
    return(
        <div>
            <div className='h-screen w-screen fixed '>
                <BackgroundVideo />
            </div>

            <div className='h-screen w-screen pb-2 relative flex flex-col justify-between overflow-hidden'>
                <HomeHeroText/>
                <HomeBottomText/>

            </div>
           
        </div>
        
    )
}
export default Home;