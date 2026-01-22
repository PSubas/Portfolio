import React, { useRef } from "react";
// import gsap from "gsap";
import { BRAND_NAME } from "../../constants/constants";
import { HERO, SPACING } from "../../constants/tokens";
import PrimaryButton from "../UI/Button/PrimaryButton";
import Section from "../common/Section";

const Hero: React.FC = () => {
  // const roleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({ delay: 0.4 });

  //   tl.fromTo(
  //     containerRef.current,
  //     { opacity: 0, y: 30 },
  //     { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
  //   )
  //     .fromTo(
  //       roleRef.current,
  //       { opacity: 0, y: 10 },
  //       { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
  //       0.2,
  //     )
  //     .fromTo(
  //       titleRef.current,
  //       { opacity: 0, y: 20, filter: "blur(8px)" },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         filter: "blur(0px)",
  //         duration: ANIMATIONS.TITLE_ANIMATION.duration,
  //         ease: "power3.out",
  //       },
  //       "-=0.3",
  //     )
  //     .fromTo(
  //       descriptionRef.current,
  //       { opacity: 0, y: 10 },
  //       { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
  //       "-=0.2",
  //     )
  //     .fromTo(
  //       ctasRef.current,
  //       { opacity: 0, y: 10 },
  //       { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
  //       "-=0.2",
  //     );

  //   gsap.to(".orb", ANIMATIONS.ORB_ANIMATION);

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  const handleScrollTo = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="hero"
      spacing="py"
      className={`${HERO.HEIGHT} flex items-center justify-center`}
    >
      {/* Faint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 25%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 26%, transparent 27%, transparent 74%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 75%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 25%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 26%, transparent 27%, transparent 74%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 75%, rgba(var(--color-primary-rgb, 123, 97, 255), 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Glows - Matching Reference Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 blur-[120px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary), transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-100 h-100 bg-secondary/15 blur-[100px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary), transparent 70%)",
          }}
        />
      </div>

      {/* Main Container */}
      <div
        className={`relative z-10 w-full max-w-350 mx-auto flex flex-col lg:flex-row items-center justify-between ${HERO.CONTAINER_GAP} px-4`}
      >
        {/* Left Column: Content */}
        <div
          ref={containerRef}
          className="flex flex-col flex-1 max-w-5xl lg:items-start text-center lg:text-left pt-12"
        >
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] pb-4"
          >
            Frontend <br />
            <span className="bg-linear-to-r from-primary/70 via-secondary/70 to-primary/70 bg-clip-text text-transparent opacity-90">
              Developer
            </span>
            <span className="block pt-4 text-2xl md:text-3xl lg:text-4xl font-medium text-text-muted tracking-normal opacity-80">
              with a focus on end-to-end features
            </span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl text-text-muted font-light leading-relaxed pb-8 sm:pb-6 max-w-3xl mx-auto lg:mx-0"
          >
            Building reliable interfaces that bridge frontend and backend
            seamlessly.
          </p>

          <div
            ref={ctasRef}
            className={`flex flex-col sm:flex-row ${SPACING.ELEMENT_GAP_SMALL} w-full sm:w-auto justify-center lg:justify-start pb-8 sm:pb-0`}
          >
            {/* Primary CTA */}
            <PrimaryButton onClick={() => handleScrollTo("#projects")}>
              View My Projects
            </PrimaryButton>

            {/* Secondary CTA */}
            <button
              onClick={() => handleScrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium text-text-muted border border-white/20 bg-transparent backdrop-blur-sm transition-all duration-300 hover:text-text hover:border-white/40 hover:bg-white/5"
            >
              Contact Me
              <svg
                className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Decorative Code Terminal */}
        <div className="hidden lg:flex flex-1 items-center justify-end relative pl-10">
          <div className="relative w-full max-w-137.5 aspect-video animate-float">
            {/* Terminal Window */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden shadow-primary/20">
              {/* Header */}
              <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <div className="pl-4 text-[10px] uppercase tracking-widest text-text-muted opacity-50 font-bold">
                  experience.ts
                </div>
              </div>
              {/* Code Area */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-4">
                  <span className="text-text-muted opacity-30 select-none">
                    01
                  </span>
                  <span className="text-secondary">const</span>
                  <span className="text-primary">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted opacity-30 select-none">
                    02
                  </span>
                  <span className="pl-4 text-white">name:</span>
                  <span className="text-[#ce9178]">'{BRAND_NAME}'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted opacity-30 select-none">
                    03
                  </span>
                  <span className="pl-4 text-white">role:</span>
                  <span className="text-[#ce9178]">'Frontend Engineer'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted opacity-30 select-none">
                    04
                  </span>
                  <span className="pl-4 text-white">skills:</span>
                  <span className="text-white">[</span>
                  <span className="text-[#ce9178]">'React'</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178]">'Next Js'</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178]">'Node Js'</span>
                  <span className="text-white">]</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted opacity-30 select-none">
                    05
                  </span>
                  <span className="text-white">{"}"}</span>
                </div>
              </div>
            </div>

            {/* Floating Glows around Terminal */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 blur-[60px] animate-pulse" />
          </div>

          {/* Abstract Grid Elements Behind Terminal */}
          <div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-bg via-bg/40 to-transparent" />
    </Section>
  );
};

export default Hero;
