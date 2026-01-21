import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "../../context/scrollContext";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setScroll } = useScroll();

  useEffect(() => {
    if (!scrollRef.current) return;

    // LocomotiveScroll disabled; fallback to native scroll.
    // setScroll(new LocomotiveScroll({ ...options }))
    setScroll(null);

    // If you still use ScrollTrigger timelines, register the plugin.
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.killAll();
    };
  }, [setScroll]);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default Layout;
