import React, { useRef } from "react";
import { SPACING } from "../../constants/tokens";
import PrimaryButton from "../UI/Button/PrimaryButton";
import Section from "../common/Section";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
            at scale.
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
