import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
import { NAV_LINKS, BRAND_NAME } from "../../constants/constants";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const clickTimeRef = useRef<number>(0);

  // useEffect(() => {
  //   const nav = navRef.current;
  //   if (!nav) return;

  //   // Entrance animation
  //   gsap.fromTo(
  //     nav,
  //     { y: -100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: ANIMATIONS.NAVBAR_ENTRANCE.duration,
  //       delay: ANIMATIONS.NAVBAR_ENTRANCE.delay,
  //       ease: ANIMATIONS.NAVBAR_ENTRANCE.ease,
  //     },
  //   );
  // }, []);

  // Track active section based on native scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Skip updating if a click happened less than 800ms ago
      const timeSinceClick = Date.now() - clickTimeRef.current;
      if (timeSinceClick < 800) return;

      const offset = 160;
      let current = "#hero";

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

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(targetId);
    if (!target) return;

    // Record the click time to prevent scroll handler from interfering
    clickTimeRef.current = Date.now();

    // Update active section immediately
    setActiveSection(targetId);

    target.scrollIntoView({ behavior: "smooth" });
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
          className="md:hidden w-12 h-12 flex flex-col justify-center items-center gap-1.5 z-50 relative"
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
          className={`fixed md:static top-0 right-0 md:right-auto w-72 md:w-auto h-screen md:h-auto md:min-h-0 bg-bg-alt md:bg-transparent flex flex-col md:flex-row justify-start md:justify-start items-center md:items-center gap-6 md:gap-12 z-40 transition-all duration-base pt-32 md:pt-0 ${isOpen ? "translate-x-0 outline outline-secondary/10" : "translate-x-full md:translate-x-0"} border-l md:border-l-0 border-glass-border md:border-none overflow-y-auto md:overflow-visible`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            const isContact = link.id === "#contact";

            // Contact CTA Button
            if (isContact) {
              return (
                <div
                  key={link.id}
                  className="w-full md:w-auto px-8 md:px-0 pt-4 md:pt-0"
                >
                  <a
                    href={link.id}
                    className="flex items-center justify-center px-8 py-3 text-sm font-semibold text-secondary border-2 border-secondary/40 rounded-full bg-secondary/5 backdrop-blur-sm transition-all duration-base hover:bg-secondary/10 hover:border-secondary/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 whitespace-nowrap"
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </div>
              );
            }

            // Regular Nav Links
            return (
              <a
                key={link.id}
                href={link.id}
                className={`w-full md:w-auto px-8 md:px-0 py-4 md:py-0 text-lg md:text-base font-medium transition-all duration-base relative group whitespace-nowrap text-center md:text-left ${
                  isActive
                    ? "text-secondary"
                    : "text-text-muted opacity-80 hover:opacity-100 hover:text-text"
                }`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 md:bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 h-0.5 bg-secondary transition-all duration-base ${
                    isActive
                      ? "w-1/4 md:w-full"
                      : "w-0 group-hover:w-1/4 md:group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm z-30 transition-opacity duration-base pointer-events-none md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
