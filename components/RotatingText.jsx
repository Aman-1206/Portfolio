"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RotatingText() {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const words = ["Front-End -Developer", "Back-End -Developer", "Full-Stack -Developer", "Database"];
  let currentIndex = 0;

  useEffect(() => {
    const container = containerRef.current;
    const el = textRef.current;
    if (!container || !el) return;

    // Slide in the entire line from bottom
    gsap.from(container, { y: 100, opacity: 0, duration: 1, ease: "power3.out" });

    const typeWord = (word, callback) => {
      el.innerText = "";
      let letters = word.split("");
      let tl = gsap.timeline({ onComplete: callback });
      letters.forEach((letter) => {
        tl.to({}, { duration: 0.05, onComplete: () => (el.innerText += letter) });
      });
    };

    const eraseWord = (callback) => {
      let letters = el.innerText.split("");
      let tl = gsap.timeline({ onComplete: callback });
      letters.reverse().forEach(() => {
        tl.to({}, { duration: 0.03, onComplete: () => (el.innerText = el.innerText.slice(0, -1)) });
      });
    };

    const loop = () => {
      typeWord(words[currentIndex], () => {
        gsap.delayedCall(1.5, () => {
          eraseWord(() => {
            currentIndex = (currentIndex + 1) % words.length;
            loop();
          });
        });
      });
    };

    // Start the loop after the slide-in finishes
    gsap.delayedCall(1, loop);
  }, []);

  return (
    <div className="h-[45px] sm:[150px] md:[150px]" ref={containerRef} style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffffff", fontFamily: "monospace", textShadow: " 0 0 40px #ffffff" }}>
      I am a Website Developer: <span ref={textRef} style={{ color: "#00e5ff", textShadow: " 0 0 40px #00e5ff" }}></span>
    </div>
  );
}
