import { Socials } from '@/constants';
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <a href="#" className="h-auto w-auto flex flex-row items-center">
                <Image 
                src="/NavLogo.png" 
                alt="logo" 
                width={40} 
                height={40} 
                className='cursor-pointer hover:animate-slowspin'
                />
                <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                    XHARDA MONDI
                </span>
            </a>
            <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
                <div className="flex items-center justify-between w-full h-auto border border-transparent bg-transparent mr-[15] px-[10px] text-gray-200 ">
                    <a href="#" className="cursor-pointer">Accueil</a>
                    <a href="#skills" className="cursor-pointer">Compétences</a>
                    <a href="#lamp" className="cursor-pointer">Études</a>
                    <a href="#certifs" className="cursor-pointer">Certifications</a>
                    <a href="#projects" className="cursor-pointer">Projets</a>
                    <a href="#contact" className="cursor-pointer">Contact</a>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                {Socials.map((social) => (
                    <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={24}
                    height={24}
                    />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Navbar