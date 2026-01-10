import React from 'react'

const BackgroundVideo  = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="../../../public/video/video.mp4" ></video>
    </div>
  )
}

export default BackgroundVideo 

// src="../../../public/video/video.mp4"