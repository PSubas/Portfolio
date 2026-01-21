import React, { useRef } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default Layout;
