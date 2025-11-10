"use client"
import GooeyNav from "@/components/GooeyNav";
import RotatingText from "@/components/RotatingText";
import { useState, useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";
import CV from "@/components/CV";
import Connect from "@/components/Connect";
import { ChevronDown, Contact } from "lucide-react";
import About from "@/components/About";
import AboutWord from "@/components/AboutWord";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ProjectMobile from "@/components/ProjectMobile";
import useIsMobile from "@/hooks/useIsmobile";


const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

export default function Home() {
  const items = [
    { label: "Home", href: "#Home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#contact" },
  ];

  const [isEnded, setIsEnded] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const video1 = videoRef1.current;

    if (!video1) return;

    video1.play().catch(() => console.warn("Autoplay blocked by browser."));

    const handleEnded = () => {
      console.log("🎬 Intro video ended!");
      setIsEnded(true);
    };

    video1.addEventListener("ended", handleEnded);
    return () => video1.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    if (isEnded) {
      const video2 = videoRef2.current;
      if (video2) {
        video2.style.opacity = "1";
        video2.play();
      }
    }
  }, [isEnded]);
  useEffect(() => {
    const els = Array.from(document.getElementsByClassName("aman"));
    const applySizeClass = () => {
      const isSmall = typeof window !== "undefined" && window.innerWidth < 640;
      for (const el of els) {
        if (isSmall) el.classList.add("small-text", "margin-top-small");
        else el.classList.remove("small-text", "margin-top-small");
      }
    };

    applySizeClass();
    window.addEventListener("resize", applySizeClass);
    return () => window.removeEventListener("resize", applySizeClass);
  }, []);

  return (
    <PageWrapper>
      <>
        <div className="h-auto sm:h-[600px] relative">

          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
          {/* <HamburgerNav items={items} /> */}
          <div id="Home" className="text w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex justify-center items-center relative">
            <div className="text2 flex justify-center items-center relative w-full h-[60vh] sm:h-screen overflow-hidden">

              <div
                className={`${orbitron.className} aman z-20 dissolve-text text-white 
    text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
    font-extrabold text-center 
    mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-27
    -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16
    mix-blend-screen `}
              >
                A
              </div>

              <div
                className={`${orbitron.className} aman z-20 dissolve-text text-white 
    text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
    font-extrabold text-center 
    mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-27
    -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16
    mix-blend-screen`}
              >
                M
              </div>
              <div
                className={`${orbitron.className} aman z-20 dissolve-text text-white 
    text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
    font-extrabold text-center 
    mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-27
    -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16
    mix-blend-screen`}
              >
                A
              </div>
              <div
                className={`${orbitron.className} aman z-20 dissolve-text text-white 
    text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
    font-extrabold text-center 
    mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-27
    -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16
    mix-blend-screen`}
              >
                N
              </div>


              {/* 🎬 Two overlapping videos for smooth transition */}
              <video
                ref={videoRef1}
                className="bg -z-10 absolute top-0 left-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700"
                autoPlay
                muted
              >
                <source src="whole1.mp4" type="video/mp4" />
              </video>

              <video
                ref={videoRef2}
                className="bg -z-10 absolute top-0 left-0 w-full h-full object-cover pointer-events-none opacity-0 transition-opacity duration-700"
                muted
                loop
              >
                <source src="whole2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="hero-text text-white 
  text-base sm:text-lg md:text-xl lg:text-2xl
  ml-4 sm:ml-8 md:ml-16 lg:ml-28
  z-auto
  px-4 sm:px-0">

            <RotatingText />
            <CV />
            <Connect />
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30">
              <ChevronDown
                size={typeof window !== "undefined" && window.innerWidth < 640 ? 32 : 48}
                className="text-white animate-bounce cursor-pointer"
              />
            </div>

          </div>
          <About />
          <AboutWord />
          <Skills />
          {useIsMobile() ? <ProjectMobile /> : <Projects />}
          <Form />
          <Footer />
        </div>
        <div />
      </>
    </PageWrapper>
  );
}