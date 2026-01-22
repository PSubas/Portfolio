import React from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Section from "../components/common/Section";

const SocialPlatformCaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors"
          >
            <ArrowLeft size={20} weight="bold" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <Section id="case-study">
        <div className="max-w-4xl mx-auto pt-20 px-4">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Production Project
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-text mb-6 leading-tight">
              Production Social Platform & Internal Admin Tools
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              Frontend & API Development · Confidential Project
            </p>
            <p className="text-base text-text-muted/70">
              <em>
                Note: All company-identifying details, domains, and proprietary
                information have been anonymized per NDA.
              </em>
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/Internal Dashboard.jpeg"
              alt="Social Platform & Admin Dashboard"
              className="w-full h-auto"
            />
          </div>

          {/* Quick Facts Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-glass border border-glass-border rounded-lg p-6">
              <div className="text-sm uppercase tracking-widest text-secondary font-semibold mb-2">
                Type
              </div>
              <p className="text-text font-medium">Social Platform</p>
            </div>
            <div className="bg-glass border border-glass-border rounded-lg p-6">
              <div className="text-sm uppercase tracking-widest text-secondary font-semibold mb-2">
                Role
              </div>
              <p className="text-text font-medium">Frontend & API Dev</p>
            </div>
            <div className="bg-glass border border-glass-border rounded-lg p-6">
              <div className="text-sm uppercase tracking-widest text-secondary font-semibold mb-2">
                Scope
              </div>
              <p className="text-text font-medium">End-to-End Features</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-4xl font-bold text-text mb-8">Overview</h2>
            <div className="text-text-muted space-y-6 leading-relaxed text-lg">
              <p>
                This case study summarizes my work on a production social
                platform and its associated internal admin tools, where I
                contributed across both frontend development and backend API
                implementation.
              </p>
              <p>
                The system consisted of two primary surfaces: a user-facing
                social application focused on reviews and community discussions,
                and an internal admin dashboard used for content management and
                moderation workflows. Both relied on API-driven data, required
                consistent UX behavior, and needed to perform reliably in a
                production environment.
              </p>
            </div>
          </div>

          {/* Role & Scope Section */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-4xl font-bold text-text mb-8">Role & Scope</h2>
            <div className="space-y-6">
              <div className="bg-glass border border-glass-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-text mb-6">
                  Frontend & API Developer
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  I worked closely with a senior developer while independently
                  owning multiple features end-to-end across frontend and
                  backend layers.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <span className="text-secondary font-bold min-w-fit">
                      ✓
                    </span>
                    <p className="text-text-muted">
                      Building responsive, accessible UI using Next.js and
                      TypeScript
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-secondary font-bold min-w-fit">
                      ✓
                    </span>
                    <p className="text-text-muted">
                      Designing and implementing REST APIs to support frontend
                      features
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-secondary font-bold min-w-fit">
                      ✓
                    </span>
                    <p className="text-text-muted">
                      Managing asynchronous data and server state
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-secondary font-bold min-w-fit">
                      ✓
                    </span>
                    <p className="text-text-muted">
                      Structuring pages with semantic HTML and proper metadata
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-secondary font-bold min-w-fit">
                      ✓
                    </span>
                    <p className="text-text-muted">
                      Implementing SEO best practices, including JSON-LD where
                      applicable
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-secondary font-bold min-w-fit">
                      ✓
                    </span>
                    <p className="text-text-muted">
                      Developing internal tools with a focus on clarity,
                      efficiency, and maintainability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-4xl font-bold text-text mb-8">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "Next.js", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="bg-linear-to-br from-primary/20 to-secondary/20 border border-primary/30 px-4 py-2 rounded-lg text-sm text-text font-medium"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Backend & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "REST APIs", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-linear-to-br from-primary/20 to-secondary/20 border border-primary/30 px-4 py-2 rounded-lg text-sm text-text font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Challenges Section */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-4xl font-bold text-text mb-8">
              Key Challenges & Solutions
            </h2>
            <div className="space-y-8">
              {/* Challenge 1 */}
              <div className="bg-glass border border-glass-border rounded-lg p-8">
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-xl font-bold text-secondary">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">
                      Clear UX for Asynchronous User Interactions
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-secondary font-semibold mb-2">
                          Challenge
                        </p>
                        <p className="text-text-muted leading-relaxed">
                          User actions such as submitting content and navigating
                          discussions relied heavily on asynchronous data, which
                          could easily result in unclear or inconsistent UI
                          states.
                        </p>
                      </div>
                      <div>
                        <p className="text-secondary font-semibold mb-2">
                          Solution
                        </p>
                        <p className="text-text-muted leading-relaxed">
                          Designed consistent patterns for loading, success,
                          empty, and error states. Ensured every user action
                          produced clear visual feedback.
                        </p>
                      </div>
                      <div className="pt-2 mt-2 border-t border-white/10">
                        <p className="text-secondary font-semibold mb-2">
                          Outcome
                        </p>
                        <p className="text-text-muted">
                          Predictable interaction flows and improved usability
                          in network-dependent scenarios.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-glass border border-glass-border rounded-lg p-8">
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-xl font-bold text-secondary">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">
                      Reliable API Design & State Synchronization
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-secondary font-semibold mb-2">
                          Challenge
                        </p>
                        <p className="text-text-muted leading-relaxed">
                          Frontend views depended on frequently changing data,
                          requiring a balance between freshness, performance,
                          and UI stability.
                        </p>
                      </div>
                      <div>
                        <p className="text-secondary font-semibold mb-2">
                          Solution
                        </p>
                        <p className="text-text-muted leading-relaxed">
                          Designed APIs with predictable response structures.
                          Used structured client-side data fetching with caching
                          and background updates. Ensured frontend and backend
                          stayed loosely coupled.
                        </p>
                      </div>
                      <div className="pt-2 mt-2 border-t border-white/10">
                        <p className="text-secondary font-semibold mb-2">
                          Outcome
                        </p>
                        <p className="text-text-muted">
                          Cleaner data flow, reduced redundant requests, and
                          more stable UI behavior.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="bg-glass border border-glass-border rounded-lg p-8">
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-xl font-bold text-secondary">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">
                      Efficient Internal Admin Workflows
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-secondary font-semibold mb-2">
                          Challenge
                        </p>
                        <p className="text-text-muted leading-relaxed">
                          Admin users needed fast, accurate tools where mistakes
                          could have operational impact.
                        </p>
                      </div>
                      <div>
                        <p className="text-secondary font-semibold mb-2">
                          Solution
                        </p>
                        <p className="text-text-muted leading-relaxed">
                          Built dashboards emphasizing data visibility over
                          visual complexity. Designed clear action boundaries
                          and confirmation patterns. Reused shared UI components
                          to reduce long-term maintenance cost.
                        </p>
                      </div>
                      <div className="pt-2 mt-2 border-t border-white/10">
                        <p className="text-secondary font-semibold mb-2">
                          Outcome
                        </p>
                        <p className="text-text-muted">
                          More efficient internal workflows and easier ongoing
                          iteration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture & Technical Decisions */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-4xl font-bold text-text mb-8">
              Architecture & Technical Decisions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Component-driven UI architecture with clear separation of concerns",
                "Shared UI primitives across user-facing and admin interfaces",
                "Backend APIs designed to be reusable and frontend-agnostic",
                "Utility-first styling to maintain consistency and speed up development",
                "Code written for long-term readability and team collaboration",
                "Performance and accessibility as first-class concerns",
              ].map((decision, idx) => (
                <div
                  key={idx}
                  className="bg-glass border border-glass-border rounded-lg p-6"
                >
                  <div className="flex gap-3">
                    <span className="text-secondary font-bold min-w-fit text-lg">
                      →
                    </span>
                    <p className="text-text-muted leading-relaxed">
                      {decision}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance, Accessibility & SEO */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-4xl font-bold text-text mb-8">
              Performance, Accessibility & SEO
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Rendering Optimization",
                  desc: "Optimized rendering for list-heavy and frequently updated views with reduced unnecessary re-renders and API overhead",
                },
                {
                  title: "Semantic HTML",
                  desc: "Used semantic HTML for accessibility and crawlability",
                },
                {
                  title: "Meta Tags & Metadata",
                  desc: "Implemented proper meta tags for page-level SEO",
                },
                {
                  title: "Structured Data",
                  desc: "Added JSON-LD structured data where relevant to improve search understanding",
                },
                {
                  title: "SEO as Development Practice",
                  desc: "SEO considerations were treated as part of the development process, not an afterthought",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary/20 border border-secondary/30">
                      <span className="text-secondary font-bold text-sm">
                        ✓
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-text mb-1">{item.title}</p>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings Section */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-4xl font-bold text-text mb-8">Key Learnings</h2>
            <div className="space-y-6">
              {[
                "Designing frontend and APIs together leads to cleaner systems",
                "Production constraints strongly influence architectural decisions",
                "Balancing UX quality with delivery speed is a continuous trade-off",
                "Writing code that others can maintain is as important as shipping features",
              ].map((learning, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 pl-6 border-l-2 border-secondary"
                >
                  <p className="text-text-muted leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Note */}
          <div className="mb-16 bg-glass border border-glass-border rounded-lg p-8 bg-linear-to-br from-glass to-glass/50">
            <h2 className="text-2xl font-bold text-text mb-4">Note</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Due to confidentiality, live demos and source code cannot be
              shared. However, I'm happy to discuss the technical approach,
              architectural decisions, and trade-offs in more detail during a
              conversation.
            </p>
            <p className="text-text-muted text-sm italic">
              // TODO: Add live demo link when confidentiality allows
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center text-center">
            <p className="text-text-muted mb-6 leading-relaxed text-lg">
              Ready to discuss this project or explore collaboration
              opportunities? I'd love to hear about your ideas and how I can
              contribute.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-secondary/20 to-primary/20 border border-secondary/40 rounded-lg text-lg font-semibold text-text transition-all duration-base hover:from-secondary/30 hover:to-primary/30 hover:border-secondary/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105"
            >
              Get in Touch
              <ArrowLeft size={20} weight="bold" className="rotate-180" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SocialPlatformCaseStudy;
