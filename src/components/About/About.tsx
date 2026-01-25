import React, { useRef, useState } from "react";
import { SPACING } from "../../constants/tokens";
import PrimaryButton from "../UI/Button/PrimaryButton";
import Section from "../common/Section";

type TechTab = "frontend" | "backend" | "tools";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<TechTab>("frontend");

  return (
    <Section id="about" ref={sectionRef}>
      <div className="relative z-10 w-full flex flex-col">
        {/* Heading */}
        <div className={`${SPACING.CONTENT_BOTTOM_LG} text-center`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4 text-text">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col items-center text-center  max-w-2xl mx-auto">
          {/* Strong Opening - Answers: What level are you? */}
          <p className="text-xl md:text-2xl font-bold leading-snug text-text pb-8">
            I build{" "}
            <span className="text-secondary">production-grade interfaces</span>{" "}
            designed to scale.
          </p>

          {/* Proof Points - Answers: What problems can you handle? Can I trust you with ownership? */}
          <div className="pb-6">
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
                    Feature ownership
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

          {/* Technical Focus Section */}
          <div className="w-full max-w-2xl pt-12 pb-8">
            {/* Section Label */}
            <p className="text-xs uppercase tracking-wider text-text-muted/60 text-center pb-6">
              Technical Focus
            </p>

            {/* Tabs */}
            <div className="flex justify-center gap-1 pb-8 border-b border-glass-border">
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-6 py-2.5 text-sm font-medium transition-colors duration-200 relative ${
                  activeTab === "frontend"
                    ? "text-text"
                    : "text-text-muted/70 hover:text-text-muted"
                }`}
              >
                Frontend
                {activeTab === "frontend" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`px-6 py-2.5 text-sm font-medium transition-colors duration-200 relative ${
                  activeTab === "backend"
                    ? "text-text"
                    : "text-text-muted/70 hover:text-text-muted"
                }`}
              >
                Backend
                {activeTab === "backend" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-6 py-2.5 text-sm font-medium transition-colors duration-200 relative ${
                  activeTab === "tools"
                    ? "text-text"
                    : "text-text-muted/70 hover:text-text-muted"
                }`}
              >
                Tools & Practices
                {activeTab === "tools" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"></span>
                )}
              </button>
            </div>

            {/* Tab Content */}
            <div className="pt-6">
              {activeTab === "frontend" && (
                <ul className="space-y-2.5 text-sm text-text-muted/90">
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>HTML, CSS, JavaScript, TypeScript</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>
                      Next.js & React with component-based architecture and
                      hooks
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Server-rendered and client-rendered UI patterns</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Responsive layouts and reusable UI components</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>State management and predictable data flow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Performance-aware frontend development</span>
                  </li>
                </ul>
              )}

              {activeTab === "backend" && (
                <ul className="space-y-2.5 text-sm text-text-muted/90">
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Node.js and Express for server-side logic</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>RESTful API design and integration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Authentication and basic authorization flows</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>
                      Handling application data, errors, and edge cases
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>
                      Understanding backend constraints that impact frontend
                      decisions
                    </span>
                  </li>
                </ul>
              )}

              {activeTab === "tools" && (
                <ul className="space-y-2.5 text-sm text-text-muted/90">
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Git & version control</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Clean, maintainable code patterns</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Debugging & performance awareness</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary shrink-0">•</span>
                    <span>Feature ownership mindset</span>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <p className="text-sm leading-relaxed text-text-muted/70">
              I ship. I own outcomes. I care about what endures.
            </p>

            <PrimaryButton
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "/Subas_Panta_Frontend_Developer_Resume_2026_b742e3ce-204e-40c1-903a-03d3fbd55c1d.pdf";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.click();
              }}
              showArrow={false}
            >
              Download My CV
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
