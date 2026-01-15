import React, { useState } from "react";
import type LocomotiveScroll from "locomotive-scroll";
import { ScrollContext } from "./scrollContext";

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  return (
    <ScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
