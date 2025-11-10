"use client"
import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const CV = () => {
  const resumeRef = useRef(null);

  useEffect(() => {
    gsap.from(resumeRef.current, { y: 100, opacity: 0, duration: 1, ease: "power3.out", delay: 0.5 });
  }, [])


  return (
    <div className="resume relative z-30 flex items-center space-x-3 mt-[105px] sm:-mt-0" ref={resumeRef}>
      <span className=" text-gray-200 text-[25px]">Download CV :</span>
      <a
        href="/CV.pdf"
        download
        className="bg-[#ffffff] text-black font-bold px-2 sm:px-4 py-2 rounded-full 
               transition-all duration-300 border-2 border-transparent 
               hover:border-[#00e5ff] hover:shadow-[0_0_20px_#00e5ff] text-[12px] sm:text-2xl"
      >
        Download Resume
      </a>
    </div>


  )
}

export default CV