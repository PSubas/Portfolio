import React, { useState } from "react";
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

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

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
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-linear-to-br from-[#1a1a2e] to-bg contact-section md:px-4"
      id="contact"
      data-scroll-section
    >
      {/* Ambient Orbs */}
      <div className="absolute w-62.5 h-62.5 bg-primary rounded-full blur-[80px] z-0 pointer-events-none opacity-15 top-[10%] -left-[5%] animate-float"></div>
      <div className="absolute w-75 h-75 bg-secondary rounded-full blur-[80px] z-0 pointer-events-none opacity-10 bottom-[10%] -right-[10%] animate-float-reverse"></div>

      <div className="grid grid-cols-2 gap-32 max-w-250 w-full relative z-10 md:grid-cols-1 md:gap-8">
        <div>
          <h2 className="text-5xl font-bold mb-md bg-linear-to-r from-white to-primary bg-clip-text text-transparent">
            {TEXT_CONTENT.CONTACT.HEADING}
          </h2>
          <p className="text-xl text-text-muted mb-lg">
            {TEXT_CONTENT.CONTACT.DESCRIPTION}
          </p>

          <div className="flex gap-md">
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
                  className="text-text transition-colors duration-300 hover:text-secondary"
                  title={link.platform}
                >
                  {IconComponent && <IconComponent size={32} />}
                </a>
              );
            })}
          </div>
        </div>

        <form
          className="bg-glass border border-glass-border rounded-2xl p-lg flex flex-col gap-md backdrop-blur-sm"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder={FORM_PLACEHOLDERS.NAME}
              required
              className="w-full bg-[rgba(255,255,255,0.05)] border-b-2 border-glass-border rounded px-4 py-4 text-white font-inherit text-base transition-all duration-300 focus:outline-none focus:bg-glass-border focus:border-b-primary"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={FORM_PLACEHOLDERS.EMAIL}
              required
              className="w-full bg-[rgba(255,255,255,0.05)] border-b-2 border-glass-border rounded px-4 py-4 text-white font-inherit text-base transition-all duration-300 focus:outline-none focus:bg-glass-border focus:border-b-primary"
            />
          </div>
          <div>
            <textarea
              placeholder={FORM_PLACEHOLDERS.MESSAGE}
              rows={FORM_CONFIG.MESSAGE_ROWS}
              required
              className="w-full bg-[rgba(255,255,255,0.05)] border-b-2 border-glass-border rounded px-4 py-4 text-white font-inherit text-base transition-all duration-300 focus:outline-none focus:bg-glass-border focus:border-b-primary resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`flex items-center justify-center gap-sm p-4 font-bold rounded transition-all duration-300 ${status === "success" ? "bg-[#00fa9a] text-black" : "bg-text text-bg hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(123,97,255,0.4)]"}`}
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
    </section>
  );
};

export default Contact;
