import { createContext, useContext } from "react";
import type LocomotiveScroll from "locomotive-scroll";

export interface ScrollContextType {
  scroll: LocomotiveScroll | null;
  setScroll: (scroll: LocomotiveScroll | null) => void;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
