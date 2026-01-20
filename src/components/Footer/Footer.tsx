import React from "react";

type ParticleStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

const particles: ParticleStyle[] = [...Array(10)].map(() => ({
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5}s`,
  animationDuration: `${5 + Math.random() * 5}s`,
}));

const Footer: React.FC = () => {
  return (
    <footer
      className="relative px-4 py-6 bg-black border-t border-glass-border overflow-hidden"
      data-scroll-section
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Simple CSS-based particles */}
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute -bottom-1 w-1 h-1 bg-secondary rounded-full opacity-50 animate-rise"
            style={style}
          />
        ))}
      </div>

      <div className="flex justify-between items-center relative z-10 text-text-muted text-sm md:flex-col md:gap-2">
        <p>&copy; {new Date().getFullYear()} Subas. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-text-muted transition-colors duration-base hover:text-text"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-text-muted transition-colors duration-base hover:text-text"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
