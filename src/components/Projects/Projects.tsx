import React, { useRef } from "react";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { SPACING } from "../../constants/tokens";
import { PROJECTS, TEXT_CONTENT } from "../../constants/constants";
import Section from "../common/Section";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <Section id="projects" ref={sectionRef}>
      {/* Main Container */}
      <div className="relative z-10 w-full flex flex-col">
        <div className={SPACING.CONTENT_BOTTOM_LG}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-text font-bold pb-4">
            {TEXT_CONTENT.PROJECTS.HEADING}
          </h2>
          <p className="text-text-muted text-base">
            {TEXT_CONTENT.PROJECTS.SUBHEADING}
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="bg-glass border border-glass-border rounded-xl overflow-hidden transition-all duration-base hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 hover:border-glass-border-light hover:bg-glass-light flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="h-48 relative overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-base hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Header: Title + Always-Visible Links */}
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="text-lg font-bold text-text leading-snug flex-1">
                      {project.title}
                    </h3>
                    {/* Links - Always visible, subtle */}
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.links.github}
                        className="w-size-sm h-size-sm flex justify-center items-center bg-white/8 border border-white/12 rounded-md text-text transition-all duration-fast hover:bg-white/15 hover:border-white/25 hover:scale-110"
                        title="GitHub Repository"
                      >
                        <GithubLogo size={14} weight="bold" />
                      </a>
                      <a
                        href={project.links.live}
                        className="w-size-sm h-size-sm flex justify-center items-center bg-white/8 border border-white/12 rounded-md text-text transition-all duration-fast hover:bg-white/15 hover:border-white/25 hover:scale-110"
                        title="Live Demo"
                      >
                        <ArrowUpRight size={14} weight="bold" />
                      </a>
                    </div>
                  </div>

                  {/* Role / Contribution - Primary info after title */}
                  <p className="text-sm text-text leading-normal font-medium">
                    {project.role}
                  </p>

                  {/* Project Type - Secondary typography */}
                  <p className="text-xs font-semibold text-text-subtle uppercase tracking-wider">
                    {project.type}
                  </p>

                  {/* Tech Stack Tags - For instant scanning */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t, k) => (
                      <span
                        key={k}
                        className="bg-white/5 border border-white/8 px-4 py-2 rounded-md text-xs text-text-muted font-medium tracking-wide transition-all duration-fast hover:bg-white/10 hover:border-white/12"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Reflection / Learning - Optional context */}
                  <p className="text-xs text-text-muted leading-normal italic pt-md border-t border-white/8">
                    {project.reflection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
