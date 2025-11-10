"use client"
import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Connect = () => {
    
    const connectRef = useRef(null);
    
    useEffect(() => {
      gsap.from(connectRef.current, { x: 100, opacity: 0, duration: 1, ease: "power3.out", delay: 0.5 });
    }, [])
  return (
    <div className="connect relative z-30 flex items-center space-x-3 justify-end mr-7 mt-[75px] sm:mt-[0px]" ref={connectRef}>
        <a href="mailto:amankumarschool7@gmail.com" target='_blank'><img src="/i/Email.png" alt="Email Icon" className='size-10  transition-all duration-300 border-2 border-transparent 
               hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]'/></a>
        <a href="https://www.linkedin.com/in/aman-kumar-a2ba54361/" target='_blank'><img src="/i/LinkedIn.png" alt="LinkedIn Icon" className='size-10  transition-all duration-300 border-2 border-transparent 
               hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]'/></a>
        <a href="https://github.com/Aman-1206" target='_blank'><img src="/i/GitHub.png" alt="GitHub Icon" className='size-10  transition-all duration-300 border-2 border-transparent 
               hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]'/></a>
        <a href="https://discord.com/users/766335467133075476" target='_blank'><img src="/i/Discord.png" alt="Discord Icon" className='size-10  transition-all duration-300 border-2 border-transparent 
               hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]'/></a>
        <a href="https://www.instagram.com/aman.cpp_" target='_blank'><img src="/i/Instagram.png" alt="Instagram Icon" className='size-10  transition-all duration-300 border-2 border-transparent 
               hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]'/></a>
    </div>
  )
}

export default Connect