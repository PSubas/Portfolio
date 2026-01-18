import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  TEXT_CONTENT,
  ANIMATIONS,
  BRAND_NAME,
} from "../../constants/constants";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 }); // Start shortly after mount

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: ANIMATIONS.TITLE_ANIMATION.duration,
      },
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: ANIMATIONS.SUBTITLE_ANIMATION.duration },
        ANIMATIONS.SUBTITLE_ANIMATION.offset,
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: ANIMATIONS.CTA_ANIMATION.duration,
          ease: ANIMATIONS.CTA_ANIMATION.ease,
        },
        ANIMATIONS.CTA_ANIMATION.offset,
      );

    // Floating Orbs Animation
    gsap.to(".orb", ANIMATIONS.ORB_ANIMATION);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className="relative min-h-dvh w-full flex items-center justify-center overflow-hidden"
      id="hero"
      data-scroll-section
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0">
        {/* <iframe 
          src='https://my.spline.design/orb-QYvvWtSzIRGS0CVIwk6J00i0/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full border-none pointer-events-none"
          title="3D Orb"
        ></iframe> */}
      </div>

      {/* Ambient Orbs */}
      <div
        className="orb absolute rounded-full blur-[80px] z-10 opacity-40 pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          background: "var(--color-primary)",
          top: "20%",
          left: "10%",
        }}
      ></div>
      <div
        className="orb absolute rounded-full blur-[80px] z-10 opacity-30 pointer-events-none"
        style={{
          width: "200px",
          height: "200px",
          background: "var(--color-secondary)",
          bottom: "20%",
          right: "10%",
        }}
      ></div>

      <div className="relative z-10 text-center pointer-events-none">
        <h2
          className="text-2xl text-secondary uppercase tracking-widest font-medium mb-2"
          ref={subtitleRef}
        >
          {TEXT_CONTENT.HERO.TITLE}
        </h2>
        <h1
          className="text-7xl md:text-5xl font-black mb-4 leading-tight drop-shadow-lg"
          ref={titleRef}
        >
          {TEXT_CONTENT.HERO.GREETING}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px var(--color-primary)" }}
          >
            {BRAND_NAME}
          </span>
        </h1>
        <button
          className="mt-16 px-12 py-4 text-lg font-semibold text-bg bg-primary rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl pointer-events-auto"
          style={{
            boxShadow: "0 0 30px rgba(123, 97, 255, 0.5)",
          }}
          ref={ctaRef}
        >
          {TEXT_CONTENT.HERO.CTA}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-52 bg-linear-to-t from-bg to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
