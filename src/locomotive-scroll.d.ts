declare module "locomotive-scroll" {
  export interface ILocomotiveScrollOptions {
    el: HTMLElement;
    name?: string;
    offset?: number | string[];
    repeat?: boolean;
    smooth?: boolean;
    direction?: "vertical" | "horizontal";
    lerp?: number;
    class?: string;
    scrollbarContainer?: false | HTMLElement;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      direction?: "vertical" | "horizontal";
      gestureDirection?: "vertical" | "horizontal" | "both";
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: "vertical" | "horizontal";
      gestureDirection?: "vertical" | "horizontal" | "both";
    };
  }

  export default class LocomotiveScroll {
    constructor(options: ILocomotiveScrollOptions);
    init(): void;
    update(): void;
    destroy(): void;
    on(event: string, func: (...args: unknown[]) => void): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        callback?: () => void;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
      }
    ): void;
    stop(): void;
    start(): void;
    el: HTMLElement;
    name: string;
    scroll: {
      x: number;
      y: number;
      instance?: {
        scroll: {
          x: number;
          y: number;
        };
      };
    };
  }
}
