"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github  , Globe} from "lucide-react";

const projects = [
  {
    title: "Weather Web App",
    description:
      "Displays real-time weather updates using OpenWeather API with a clean and modern UI.",
    tech: ["Next.js", "API", "CSS"],
    github: "https://github.com/Aman-1206/MAUSAM-weather-website-.git",
    live: "http://mausam69.netlify.app/",
    src: "/proj_png/mausam.png",
  },
  {
    title: "Password Manager App",
    description:
      "A secure web app to store and manage passwords locally using browser storage and encryption.",
    tech: ["React", "Tailwind", "LocalStorage"],
    github: "https://github.com/Aman-1206/PassMan.git",
    live: "https://passman69.netlify.app/",
    src: "/proj_png/passman.png",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my skills, projects, and contact information — built with Next.js.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Aman-1206/Portfolio",
    live: "https://aman-1206.github.io/Portfolio//",
    src: "/proj_png/portfolio-black.png",
  }, 
];
// Replace direct DOM manipulation with a reusable hook
// const useIsMobile = () => {
//     const [isMobile, setIsMobile] = React.useState(
//         typeof window !== "undefined" ? window.innerWidth < 764 : false
//     );

//     React.useEffect(() => {
//         const onResize = () => setIsMobile(window.innerWidth < 764);
//         window.addEventListener("resize", onResize);
//         return () => window.removeEventListener("resize", onResize);
//     }, []);

//     return isMobile;
// };

const ProjectMobile = () => {
  return (
    <section
      id="Projects"
      className=" mob_proj min-h-screen bg-black text-white flex flex-col items-center px-4 py-16"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-cyan-400">My</span> Projects
      </motion.h2>

      <div className="grid gap-8 w-full max-w-5xl sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-[#0f0f0f] to-[#060606] border border-cyan-700/30 rounded-2xl p-5 shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-cyan-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <img src={project.src} alt={project.title} className="rounded-lg mb-4" />
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full transition-all"
            >
              <Github size={18} /> View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              className="ml-2 inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full transition-all"
            >
              <Globe size={18} /> Live Demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectMobile;
