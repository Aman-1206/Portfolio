"use client"
import React from 'react'
import Image from "next/image";
import { Globe, Github } from "lucide-react";


import ScrollStack, { ScrollStackItem } from './ScrollStack'
const Projects = () => {
    // const isDesktop = useIsDesktop();
    return (
        <>

            <div><h2 id='Projects' className=" mt-52 text-5xl font-extrabold p-6 text-center text-transparent bg-clip-text bg-cyan-400 sticky top-20 z-20">
               My Projects
            </h2></div>
            <ScrollStack id='Projects' className=" w-[95%] relative overflow-visible scroll-stack overflow-y-scroll scroll-content  pr-6">


                <ScrollStackItem >
                    {/* Project Card Component */}
                    <div className=" w-[95%] h-96 justify-center items-center flex bg-gradient-to-br from-[#191a1a] via-[#1a2122] to-[#545758] shadow-lg shadow-white-900/40 border border-white-500/20 transition-transform hover:scale-[1.02] duration-300">
                        <div className="p1 w-[900px] ">

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-white mb-4 tracking-wide ml-10">
                                MAUSAM- A Weather Website
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6 px-20">
                                Mausam is a fully responsive weather website that provides real-time weather updates using the OpenWeather API. Users can search for any city to instantly view temperature, humidity, and weather conditions in an elegant, minimal interface. Built with modern web technologies, it ensures seamless performance across all devices.
                            </p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 ml-10">
                                <span className="bg-orange-600/30 text-orange-300 text-sm px-3 py-1 rounded-full border border-orange-500/40">
                                    HTML
                                </span>
                                <span className="bg-purple-600/30 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/40">
                                    CSS
                                </span>
                                <span className="bg-cyan-600/30 text-cyan-300 text-sm px-3 py-1 rounded-full border border-cyan-500/40">
                                    JAVASCRPT
                                </span>
                            </div>
                            <div className="view flex ml-10 gap-4">
                                <button className=" flex gap-2 cursor-pointer justify-center items-center mt-4 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300" ><a className='flex gap-2' href="http://mausam69.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <Globe className="w-5 h-5" />
                                    Live Demo
                                </a></button>
                                <button className=" flex gap-2 cursor-pointer justify-center items-center  mt-4 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300"><a className='flex gap-2' href="https://github.com/Aman-1206/MAUSAM-weather-website-.git" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a></button>
                            </div>


                        </div>
                        {/* Project Image */}
                        <div className="overflow-hidden rounded-xl mb-4 mr-10">
                            <Image
                                src="/proj_png/mausam.png"
                                alt="Project Preview"
                                className=" object-cover hover:scale-105 transition-transform duration-500"
                                width={600}
                                height={500}
                            />
                        </div>
                    </div>

                </ScrollStackItem>
                <ScrollStackItem>
                    {/* Project Card Component */}
                    <div className=" w-[95%] h-96 justify-center items-center flex bg-gradient-to-br from-[#191a1a] via-[#1a2122] to-[#545758] shadow-lg shadow-white-900/40 border border-white-500/20 transition-transform hover:scale-[1.02] duration-300">
                        <div className="p1 w-[900px]">

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-white mb-4 tracking-wide ml-10">
                                PassMan - A Password Manager
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6 px-20">
                                A sleek, responsive React app to securely save and manage your passwords. Built with localStorage for instant data persistence and smooth animated icons for copy and edit actions. Features include secure encryption, and a modern interface.
                            </p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 ml-10">
                                <span className="bg-blue-600/30 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/40">
                                    React
                                </span>
                                <span className="bg-orange-600/30 text-orange-300 text-sm px-3 py-1 rounded-full border border-orange-500/40">
                                    HTML
                                </span>
                                <span className="bg-purple-600/30 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/40">
                                    CSS
                                </span>
                                <span className="bg-cyan-600/30 text-cyan-300 text-sm px-3 py-1 rounded-full border border-cyan-500/40">
                                    JAVASCRPT
                                </span>
                            </div>
                            <div className="view flex ml-10 gap-4">
                                <button className=" flex gap-2 cursor-pointer justify-center items-center mt-4 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300" ><a className='flex gap-2' href="https://passman69.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <Globe className="w-5 h-5" />
                                    Live Demo
                                </a></button>
                                <button className=" flex gap-2 cursor-pointer justify-center items-center  mt-4 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300"><a className='flex gap-2' href="https://github.com/Aman-1206/PassMan.git" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a></button>
                            </div>


                        </div>
                        {/* Project Image */}
                        <div className="overflow-hidden rounded-xl mb-4 mr-10">
                            <Image
                                src="/proj_png/passman.png"
                                alt="Project Preview"
                                className=" object-cover hover:scale-105 transition-transform duration-500"
                                width={600}
                                height={500}
                            />
                        </div>
                    </div>
                </ScrollStackItem>
                <ScrollStackItem>
                    {/* Project Card Component */}
                    <div className=" w-[95%] h-96 justify-center items-center flex bg-gradient-to-br from-[#191a1a] via-[#1a2122] to-[#545758] shadow-lg shadow-white-900/40 border border-white-500/20 transition-transform hover:scale-[1.02] duration-300">
                        <div className="p1 w-[900px] ">

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-white mb-4 tracking-wide ml-10">
                                Portfolio Website
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6 px-20">
                                A futuristic, animation-rich portfolio built with Next.js. Features smooth scroll effects, 3D-style visuals, and interactive project showcases — designed to feel modern, dynamic, and immersive..
                            </p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 ml-10">
                                <span className="bg-purple-600/30 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/40">
                                    NEXT.js
                                </span>
                                <span className="bg-green-600/30 text-green-300 text-sm px-3 py-1 rounded-full border border-green-500/40">
                                    Node.js
                                </span>
                                <span className="bg-cyan-600/30 text-cyan-300 text-sm px-3 py-1 rounded-full border border-cyan-500/40">
                                    MongoDB
                                </span>
                                <span className="bg-orange-600/30 text-orange-300 text-sm px-3 py-1 rounded-full border border-orange-500/40">
                                    HTML
                                </span>
                                <span className="bg-purple-600/30 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/40">
                                    CSS
                                </span>
                                <span className="bg-cyan-600/30 text-cyan-300 text-sm px-3 py-1 rounded-full border border-cyan-500/40">
                                    JAVASCRPT
                                </span>
                            </div>
                            <div className="view flex ml-10 gap-4">
                                <button className=" flex gap-2 cursor-pointer justify-center items-center mt-4 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300" ><a className='flex gap-2' href="https://aman-1206.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                                    <Globe className="w-5 h-5" />
                                    Live Demo
                                </a></button>
                                <button className=" flex gap-2 cursor-pointer justify-center items-center  mt-4 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300"><a className='flex gap-2' href="https://github.com/Aman-1206/Portfolio" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a></button>
                            </div>


                        </div>
                        {/* Project Image */}
                        <div className="overflow-hidden rounded-xl mb-4 mr-10">
                            <Image
                                src="/proj_png/portfolio-black.png"
                                alt="Project Preview"
                                className=" object-cover hover:scale-105 transition-transform duration-500"
                                width={600}
                                height={500}
                            />
                        </div>
                    </div>
                </ScrollStackItem>
            </ScrollStack>
        </>
    )
}

export default Projects