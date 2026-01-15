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

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    setScroll(scroll);

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

    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => scroll.update());
    };
  }, [setScroll]);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default Layout;
