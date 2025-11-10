"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        // guard in case window is not available (should be fine since "use client")
        const handleScroll = () => {
            // lower threshold so button appears even on short pages
            setShowTopBtn(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // call once to set initial state (covers the case user lands mid-page)
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        // smooth scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[radial-gradient(ellipse_at_center,_#000912,_#000000)] text-gray-300 py-4 border-t border-cyan-900/40">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* left */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center gap-2">
                    <span className="text-base font-semibold text-cyan-400 text-center"><span className="text-xs text-gray-400">Made by </span>Aman</span>
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} All Rights Reserved

                        Built with <span className="text-red-400">❤</span> using{" "}
                        <span className="text-cyan-400 font-medium">Next.js</span>
                    </p>
                </div>

                {/* right - icons */}
                <div className="flex flex-col items-center ">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-1 ">Connect</h3>
                    <div className="flex space-x-4 text-cyan-400 text-lg">
                        <a
                            href="https://github.com/Aman-1206"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white flex items-center gap-2 text-sm transition"
                        >
                            <FaGithub /> <span>GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white flex items-center gap-2 text-sm transition"
                        >
                            <FaLinkedin /> <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://www.instagram.com/aman.cpp_/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white flex items-center gap-2 text-sm transition"
                        >
                            <FaInstagram /> <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* scroll to top button (always in DOM, toggles visibility) */}
            <button
                aria-label="Scroll to top"
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-transform shadow-lg shadow-cyan-900/40 ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    } bg-cyan-500 hover:bg-cyan-400 text-white`}
            >
                <FaArrowUp />
            </button>
        </footer>
    );
}
