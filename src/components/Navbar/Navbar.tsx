import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "../../context/scrollContext";
import gsap from "gsap";
import { NAV_LINKS, BRAND_NAME, ANIMATIONS } from "../../constants/constants";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scroll } = useScroll();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Entrance animation
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: ANIMATIONS.NAVBAR_ENTRANCE.duration,
        delay: ANIMATIONS.NAVBAR_ENTRANCE.delay,
        ease: ANIMATIONS.NAVBAR_ENTRANCE.ease,
      },
    );
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    if (scroll) {
      const target = document.querySelector(targetId);
      if (target) {
        scroll.scrollTo(target as HTMLElement);
      }
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-5 transition-colors duration-300 will-change-transform"
      ref={navRef}
      style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center bg-glass/50 backdrop-blur-lg border border-white/5 rounded-full h-17.5 shadow-lg shadow-black/10">
        <a
          href="#"
          className="text-2xl font-bold text-text flex items-center"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          {BRAND_NAME}
          <span className="text-secondary">.</span>
        </a>

        <div
          className={`fixed md:static top-0 right-0 md:right-auto w-64 md:w-auto h-screen md:h-auto md:min-h-0 bg-bg-alt md:bg-transparent flex flex-col md:flex-row justify-center md:justify-start items-center md:items-center gap-8 md:gap-8 z-40 transition-all duration-400 ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} border-l md:border-l-0 border-white/5 md:border-none`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.id}
              className="text-base text-white/70 font-medium transition-colors duration-300 hover:text-text relative group"
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
              <span className="absolute -bottom-1.25 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm z-30 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
