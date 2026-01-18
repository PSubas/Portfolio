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
      className="relative px-8 py-8 bg-black border-t border-white/10 overflow-hidden"
      data-scroll-section
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Simple CSS-based particles */}
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute -bottom-2.5 w-1 h-1 bg-blue-500 rounded-full opacity-50 animate-rise"
            style={style}
          />
        ))}
      </div>

      <div className="flex justify-between items-center relative z-10 text-gray-400 text-sm md:flex-col md:gap-2">
        <p>&copy; {new Date().getFullYear()} Subas. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
