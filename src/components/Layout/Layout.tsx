import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "../../context/scrollContext";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setScroll } = useScroll();

  useEffect(() => {
    if (!scrollRef.current) return;

    // Detect mobile devices - disable smooth scroll on mobile for native performance
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || window.innerWidth <= 768;

    // Add mobile class to body for CSS targeting
    if (isMobile) {
      document.body.classList.add("mobile-scroll");
    }

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: !isMobile, // Disable smooth scroll on mobile - use native scrolling
      multiplier: 1,
      class: "is-revealed",
      tablet: { smooth: false }, // Disable on tablets
      smartphone: { smooth: false }, // Explicitly disable on smartphones
      // Mobile-specific options for better performance
      ...(isMobile && {
        smooth: false,
        getDirection: true,
        getSpeed: true,
      }),
    });

    setScroll(scroll);

    // Only setup GSAP ScrollTrigger on desktop (not mobile)
    if (!isMobile) {
      // ScrollTrigger Proxy Integration
      gsap.registerPlugin(ScrollTrigger);

      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value?: number): number | void {
          if (typeof value === "number") {
            scroll.scrollTo(value, { duration: 0, disableLerp: true });
            return;
          }
          return scroll.scroll.instance?.scroll.y ?? scroll.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.refresh();
    }

    return () => {
      if (scroll) scroll.destroy();
      if (!isMobile) {
        ScrollTrigger.removeEventListener("refresh", () => scroll.update());
      }
      document.body.classList.remove("mobile-scroll");
    };
  }, [setScroll]);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default Layout;
