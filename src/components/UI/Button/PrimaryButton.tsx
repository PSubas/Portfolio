import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  showArrow = true,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(123,97,255,0.5)] hover:bg-primary-light overflow-hidden ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </span>
      <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  );
};

export default PrimaryButton;
