import React, { useRef } from "react";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { PROJECTS, TEXT_CONTENT } from "../../constants/constants";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      className="py-32 min-h-screen w-full flex flex-col justify-center relative"
      id="projects"
      ref={sectionRef}
      data-scroll-section
    >
      <div className="px-8 mb-8">
        <h2 className="text-5xl text-text font-bold">
          {TEXT_CONTENT.PROJECTS.HEADING}
        </h2>
        <p className="text-text-muted">{TEXT_CONTENT.PROJECTS.SUBHEADING}</p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="bg-glass border border-glass-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 hover:border-glass-border/60 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="h-48 relative overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Header: Title + Always-Visible Links */}
                <div className="flex justify-between items-baseline gap-3">
                  <h3 className="text-lg font-bold text-text leading-snug flex-1">
                    {project.title}
                  </h3>
                  {/* Links - Always visible, subtle */}
                  <div className="flex gap-1.5 shrink-0">
                    <a
                      href={project.links.github}
                      className="w-7 h-7 flex justify-center items-center bg-white/8 border border-white/12 rounded-md text-text transition-all duration-200 hover:bg-white/15 hover:border-white/25 hover:scale-110"
                      title="GitHub Repository"
                    >
                      <GithubLogo size={14} weight="bold" />
                    </a>
                    <a
                      href={project.links.live}
                      className="w-7 h-7 flex justify-center items-center bg-white/8 border border-white/12 rounded-md text-text transition-all duration-200 hover:bg-white/15 hover:border-white/25 hover:scale-110"
                      title="Live Demo"
                    >
                      <ArrowUpRight size={14} weight="bold" />
                    </a>
                  </div>
                </div>

                {/* Role / Contribution - Primary info after title */}
                <p className="text-sm text-text leading-relaxed font-medium">
                  {project.role}
                </p>

                {/* Project Type - Secondary typography */}
                <p className="text-xs font-medium text-text-muted uppercase tracking-widest">
                  {project.type}
                </p>

                {/* Tech Stack Tags - For instant scanning */}
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t, k) => (
                    <span
                      key={k}
                      className="bg-white/5 border border-white/8 px-2 py-1 rounded-md text-xs text-text-muted font-medium tracking-wide transition-all duration-200 hover:bg-white/10 hover:border-white/12"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Reflection / Learning - Optional context */}
                <p className="text-xs text-text-muted leading-relaxed italic pt-3 border-t border-white/8">
                  {project.reflection}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
