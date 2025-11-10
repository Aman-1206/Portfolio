import React from 'react'

const About = () => {
    return (
        <>
            <div id="about" className="scroll-mt-20 scroll-container ">
                <h2 className="text-2xl sm:text-5xl font-extrabold mb-12 mt-20 text-center text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#0ff_0%,_#0a0a0a_40%,_#000_100%)]
">
                    About Me
                </h2>
                <section className="flex flex-col sm:flex-row items-start mb-20 justify-center">
                    <div className="m-5 p-7 max-w-[600px] w-auto h-full md:grid-cols-2 gap-10 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.08),_rgba(255,255,255,0.02)_50%,_rgba(0,0,0,0.6)_100%)]
 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.15)] rounded-2xl
">
                        {/* Left Section */}
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                                Hello! I'm Aman
                            </h3>
                            <p className="text-gray-300 text-[16px]  mb-4">
                                I'm a motivated Computer Science undergraduate at Shyam Lal College, Delhi University, with a passion for building innovative web applications and solving complex problems.
                            </p>
                            <p className="text-gray-300 text-[16px] mb-4">
                                Currently exploring the exciting world of full-stack development with modern technologies like React, Node.js, and MongoDB. I believe in continuous learning and constantly push myself to expand my technical horizons.
                            </p>
                            <p className="text-gray-300 text-[16px]">
                                When I'm not coding, you'll find me learning about the latest tech trends, contributing to open-source projects, or working on personal projects that challenge my skills.
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col gap-6 ml-10 max-w-[400px] m-5">
                        <div>
                            <h4 className="text-white  mb-1">• Education</h4>
                            <p className="text-gray-500 text-[16px]">
                                B.Sc. Physical Science with Computer Science
                                at
                                Shyam Lal College, DU • CGPA: 7.59
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white  mb-1">• Location</h4>
                            <p className="text-gray-500 text-[16px]">New Delhi, India</p>
                        </div>

                        <div>
                            <h4 className="text-white  mb-1">• Current Focus</h4>
                            <p className="text-gray-500 text-[16px]">
                                Mastering C++ and expanding web development skills with React, Next.js, and Node.js.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white  mb-1"> • Recent Work</h4>
                            <p className="text-gray-500 text-[16px]">
                                Developed a modern interactive portfolio website using Next.js & GSAP
                                animations.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About