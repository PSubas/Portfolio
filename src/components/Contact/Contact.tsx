import React, { useRef, useState } from "react";
import {
  PaperPlaneRight,
  Envelope,
  LinkedinLogo,
  GithubLogo,
  type IconProps,
} from "@phosphor-icons/react";
import {
  SOCIAL_LINKS,
  CONTACT_MESSAGES,
  TEXT_CONTENT,
  FORM_PLACEHOLDERS,
  FORM_CONFIG,
  ANIMATIONS,
} from "../../constants/constants";
import Section from "../common/Section";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), ANIMATIONS.FORM_SUCCESS_RESET_DELAY);
    }, ANIMATIONS.FORM_SUBMIT_DELAY);
  };

  return (
    <Section
      id="contact"
      ref={sectionRef}
      className="items-center justify-center min-h-screen"
    >
      {/* Ambient Orbs */}

      <div className="absolute  rounded-full blur-[80px] z-0 pointer-events-none opacity-15 top-[10%] -left-[5%] animate-float"></div>
      <div className="absolute  rounded-full blur-[80px] z-0 pointer-events-none opacity-10 bottom-[10%] -right-[10%] animate-float-reverse"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full flex flex-col">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-12 w-full items-start">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4 sm:pb-6 bg-linear-to-r from-text to-primary bg-clip-text text-transparent">
              {TEXT_CONTENT.CONTACT.HEADING}
            </h2>
            <p className="text-base sm:text-lg text-text-muted pb-8 sm:pb-12">
              {TEXT_CONTENT.CONTACT.DESCRIPTION}
            </p>

            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => {
                const IconMap: Record<string, React.FC<IconProps>> = {
                  Envelope,
                  LinkedinLogo,
                  GithubLogo,
                };

                const IconComponent = IconMap[link.icon];

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="text-text transition-colors duration-base hover:text-secondary"
                    title={link.platform}
                  >
                    {IconComponent && <IconComponent size={32} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            className="w-full md:w-1/2 bg-glass border border-glass-border rounded-xl p-8 flex flex-col gap-8 backdrop-blur-sm"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder={FORM_PLACEHOLDERS.NAME}
                required
                className="w-full bg-glass-light border-b-2 border-glass-border rounded px-4 py-6 text-text font-inherit text-base transition-all duration-base focus:outline-none focus:bg-glass-border focus:border-b-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={FORM_PLACEHOLDERS.EMAIL}
                required
                className="w-full bg-glass-light border-b-2 border-glass-border rounded px-4 py-6 text-text font-inherit text-base transition-all duration-base focus:outline-none focus:bg-glass-border focus:border-b-primary"
              />
            </div>
            <div>
              <textarea
                placeholder={FORM_PLACEHOLDERS.MESSAGE}
                rows={FORM_CONFIG.MESSAGE_ROWS}
                required
                className="w-full bg-glass-light border-b-2 border-glass-border rounded px-4 py-6 text-text font-inherit text-base transition-all duration-base focus:outline-none focus:bg-glass-border focus:border-b-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`flex items-center justify-center gap-4 p-6 font-bold rounded-lg transition-all duration-base ${status === "success" ? "bg-secondary/20 border border-secondary text-secondary" : "bg-text text-bg hover:bg-primary hover:text-text hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"}`}
            >
              {status === "idle" && (
                <>
                  {CONTACT_MESSAGES.SEND_IDLE} <PaperPlaneRight size={20} />
                </>
              )}
              {status === "sending" && CONTACT_MESSAGES.SENDING}
              {status === "success" && CONTACT_MESSAGES.SUCCESS}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
