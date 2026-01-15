import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "../../context/scrollContext";
import gsap from "gsap";
import { List, X } from "@phosphor-icons/react";
import styles from "./Navbar.module.css";

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
      { y: 0, opacity: 1, duration: 1, delay: 2.8, ease: "power3.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string
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
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.container}>
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          Subas<span className={styles.dot}>.</span>
        </a>

        <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          <a
            href="#"
            className={styles.link}
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            Home
          </a>
          <a
            href="#about"
            className={styles.link}
            onClick={(e) => handleNavClick(e, "#about")}
          >
            About
          </a>
          <a
            href="#projects"
            className={styles.link}
            onClick={(e) => handleNavClick(e, "#projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={styles.link}
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Contact
          </a>
          <button
            className={styles.mobileClose}
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.hireBtn}
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Let's Talk
          </button>
          <button className={styles.hamburger} onClick={toggleMenu}>
            <List size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
