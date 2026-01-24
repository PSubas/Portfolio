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
      className="relative  pb-8 bg-black border-t border-glass-border overflow-hidden"
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

      <div className="flex justify-center items-center  relative z-10 text-text-muted text-sm text-center pt-4">
        <p>&copy; {new Date().getFullYear()} Subas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
