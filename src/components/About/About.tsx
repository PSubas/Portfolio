import React, { useRef } from "react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      className="relative w-full py-24 flex flex-col overflow-hidden px-6 lg:px-12"
      id="about"
      data-scroll-section
      ref={sectionRef}
    >
      {/* Main Container - Standard Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 text-text">About Me</h2>
        </div>

        {/* Content Grid */}
        <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
          {/* Image Column */}
          <div className="flex justify-start">
            <div className="relative flex justify-center items-center w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <div className="absolute rounded-full bg-linear-to-br from-primary/10 to-transparent border border-white/8 flex justify-center items-center z-10 overflow-hidden transition-all duration-base ease-out hover:scale-105 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shadow-lg shadow-black/20">
                <img
                  src="/profile22-Picsart.png"
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col pt-8 md:pt-12 max-w-2xl">
            {/* Strong Opening - Answers: What level are you? */}
            <p className="text-xl md:text-2xl font-bold leading-snug text-text mb-8">
              I build{" "}
              <span className="text-secondary">
                production-grade interfaces
              </span>{" "}
              at scale.
            </p>

            {/* Proof Points - Answers: What problems can you handle? Can I trust you with ownership? */}
            <div className="mb-6">
              <ul className="space-y-2">
                <li className="flex gap-3 text-base text-text-muted/90">
                  <span className="text-secondary font-bold shrink-0">→</span>
                  <span>
                    <span className="text-text font-semibold">Complex UIs</span>{" "}
                    built for performance and reliability
                  </span>
                </li>
                <li className="flex gap-3 text-base text-text-muted/90">
                  <span className="text-secondary font-bold shrink-0">→</span>
                  <span>
                    <span className="text-text font-semibold">
                      Full-stack ownership
                    </span>{" "}
                    from API integration to production deployment
                  </span>
                </li>
                <li className="flex gap-3 text-base text-text-muted/90">
                  <span className="text-secondary font-bold shrink-0">→</span>
                  <span>
                    <span className="text-text font-semibold">
                      Maintainable code
                    </span>{" "}
                    that teams inherit confidently
                  </span>
                </li>
              </ul>
            </div>

            {/* Closing Statement - Trust signal */}
            <p className="text-sm leading-relaxed text-text-muted/70">
              I ship. I own outcomes. I care about what endures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
