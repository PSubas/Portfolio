import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "../../context/scrollContext";
import gsap from "gsap";
import { NAV_LINKS, BRAND_NAME, ANIMATIONS } from "../../constants/constants";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
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

  // Track active section based on LocomotiveScroll position
  useEffect(() => {
    if (!scroll) return;

    const handleScroll = () => {
      // Offset to trigger the active state when it reaches the top area
      const offset = 160;
      let current = activeSection;

      // Check sections from bottom to top to find the current one
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.querySelector(NAV_LINKS[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset) {
            current = NAV_LINKS[i].id;
            break;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    // Attach to LocomotiveScroll event
    scroll.on("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      // Detach listener if the scroll instance supports `off`
      const maybeWithOff = scroll as unknown as {
        off?: (event: string, cb: () => void) => void;
      };

      if (typeof maybeWithOff.off === "function") {
        maybeWithOff.off("scroll", handleScroll);
      }
    };
  }, [scroll, activeSection]);

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
        setActiveSection(targetId); // Update active section on click
      }
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-sm transition-colors duration-base will-change-transform bg-glass-light/60 backdrop-blur-lg border-b border-glass-border-light shadow-md shadow-black/10"
      ref={navRef}
      style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-16">
        <a
          href="#"
          className="text-2xl font-bold text-text flex items-center"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          {BRAND_NAME}
          <span className="text-secondary">.</span>
        </a>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-text transition-all duration-base ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-text transition-all duration-base ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-text transition-all duration-base ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        <div
          className={`fixed md:static top-0 right-0 md:right-auto w-64 md:w-auto h-screen md:h-auto md:min-h-0 bg-bg-alt md:bg-transparent flex flex-col md:flex-row justify-start md:justify-start items-center md:items-center gap-8 md:gap-12 z-40 transition-all duration-base pt-24 md:pt-0 ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} border-l md:border-l-0 border-glass-border md:border-none overflow-y-auto md:overflow-visible`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            const isContact = link.id === "#contact";

            // Contact CTA Button
            if (isContact) {
              return (
                <a
                  key={link.id}
                  href={link.id}
                  className="px-5 py-2 text-sm font-semibold text-secondary border-2 border-secondary/40 rounded-full bg-secondary/5 backdrop-blur-sm transition-all duration-base hover:bg-secondary/10 hover:border-secondary/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 whitespace-nowrap"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              );
            }

            // Regular Nav Links
            return (
              <a
                key={link.id}
                href={link.id}
                className={`text-base font-medium transition-all duration-base relative group whitespace-nowrap ${
                  isActive
                    ? "text-secondary"
                    : "text-text-muted opacity-70 hover:opacity-100 hover:text-text"
                }`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-base ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm z-30 transition-opacity duration-base ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
