import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
        <video 
        autoPlay
        loop
        muted
        className='absolute left-0 z-[1] object-cover w-full h-full opacity-30'
        >
            <source src='/background-2.mp4' type='video/mp4' />
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero