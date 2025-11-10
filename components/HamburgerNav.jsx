"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GooeyNav from "./GooeyNav";

const HamburgerNav = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const show = () => {
  const hamburgerBar = document.querySelector('.hamburger'); // ✅ use const, not implicit global

  if (!hamburgerBar) return; // ✅ prevent errors if <nav> not found

  if (window.innerWidth > 768) {
    hamburgerBar.classList.add('hidden');
  } else {
    hamburgerBar.classList.remove('hidden'); // ✅ re-show when not mobile
  }
};

// Run once on load
show();

// Listen to resize events
window.addEventListener('resize', show);
  
  return (
    <nav className=" hamburger fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 sm:px-10 py-4 bg-transparent">
      {/* Logo */}
      <div className="text-white text-lg font-semibold">Aman</div>

      {/* Desktop Nav */}
      {!isMobile && <GooeyNav items={items} />}

      {/* Mobile Hamburger */}
      {isMobile && (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none z-[60]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isOpen && (
            <div
              className="absolute top-16 right-5 bg-white/10 backdrop-blur-xl border border-white/20
              shadow-lg rounded-2xl p-4 w-[85%] sm:w-[60%] transition-all duration-300 ease-in-out flex flex-col gap-3"
            >
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default HamburgerNav;
