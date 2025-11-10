"use client";
import React from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiEjs,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiMongoose,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "EJS", icon: <SiEjs /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-transparent w-full text-center"
    >
      <h2 className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-cyan-400">
        Tech Stack
      </h2>

      {/* Properly Centered Grid */}
      <div className="flex justify-center w-full">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12
                   justify-items-center items-center
                   max-w-6xl mx-auto px-6"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[380px]  h-auto sm:h-96 p-8 rounded-2xl 
                       bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.08),_rgba(255,255,255,0.02)_50%,_rgba(0,0,0,0.6)_100%)]
backdrop-blur-md border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.15)] rounded-2xl
 
                       transition-all duration-300 
                       hover:shadow-[0_0_30px_rgba(0,299,255,1)] 
                       hover:border-cyan-400
                       hover:scale-105 transform"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <div className="text-4xl mb-1">{skill.icon}</div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default TechStack;
