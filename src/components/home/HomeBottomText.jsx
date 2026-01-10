import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText(){
    return(
        <div className='font-[font2] flex items-center justify-center gap-2 '>
            <div className='border-[3px] hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-7 border-white rounded-full uppercase'>
                <Link className='text-[6vw] mt-1 ' to='/projects'>Projets</Link>
            </div>

            <div className='border-[3px]  hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-7 border-white rounded-full uppercase'>
                 <Link className='text-[6vw] mt-1' to='./agence'>Agence</Link>
            </div>
            
           
        </div>
    )
}
export default HomeBottomText;