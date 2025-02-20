import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import { Backend_skill, Frontend_skill, Full_stack } from '@/constants'

const Skills = () => {
  return (
    <section
    id='skills' 
    className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    style={{transform: "scale(0.9)"}}
    >
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
                />
            ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Backend_skill.map((image, index) => (
                <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
                />
            ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Full_stack.map((image, index) => (
                <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
                />
            ))}
        </div>
        <div className="w-full h-full z-[-10] opacity-10 absolute flex items-center justify-center bg-cover ">
            <video 
            className='w-[750px] h-[470px] '
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src="/background-04.mp4"/>
        </div>

    </section>
  )
}

export default Skills