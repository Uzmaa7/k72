import React from 'react'

const InlineVideo  = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover rounded-full overflow-hidden' autoPlay loop muted src="/video/video.mp4" ></video>
    </div>
  )
}

export default InlineVideo; 