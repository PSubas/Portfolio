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
      className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden px-6 lg:px-12 min-h-screen"
      id="contact"
      data-scroll-section
    >
      {/* Ambient Orbs */}
      <div
        className="absolute bg-primary rounded-full blur-[80px] z-0 pointer-events-none opacity-15 top-[10%] -left-[5%] animate-float"
        style={{ width: "25rem", height: "25rem" }}
      ></div>
      <div
        className="absolute bg-secondary rounded-full blur-[80px] z-0 pointer-events-none opacity-10 bottom-[10%] -right-[10%] animate-float-reverse"
        style={{ width: "18.75rem", height: "18.75rem" }}
      ></div>

      {/* Main Container - Standard Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full">
          <div>
            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-text to-primary bg-clip-text text-transparent">
              {TEXT_CONTENT.CONTACT.HEADING}
            </h2>
            <p className="text-lg text-text-muted mb-12">
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

          <form
            className="bg-glass border border-glass-border rounded-xl p-8 flex flex-col gap-8 backdrop-blur-sm"
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
    </section>
  );
};

export default Contact;
