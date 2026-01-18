import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    // Animate Progress Bar
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    })
      .to(
        textRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.2",
      )
      .to(containerRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-bg z-9999 flex justify-center items-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex flex-col items-center gap-lg w-75">
        <h1
          className="text-2xl font-bold tracking-widest uppercase text-text"
          ref={textRef}
        >
          Subas
        </h1>
        <div className="w-full h-0.5 bg-white/10 rounded">
          <div
            className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
            ref={progressRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
