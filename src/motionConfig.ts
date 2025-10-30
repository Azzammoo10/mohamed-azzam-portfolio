import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useIsMobile(breakpointPx: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpointPx : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpointPx);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpointPx]);
  return isMobile;
}

export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(() =>
    typeof window !== "undefined"
      ? !!(window.matchMedia &&
          (window.matchMedia("(hover: none)").matches ||
            window.matchMedia("(pointer: coarse)").matches))
      : false
  );
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const m1 = window.matchMedia("(hover: none)");
    const m2 = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(m1.matches || m2.matches);
    update();
    m1.addEventListener?.("change", update);
    m2.addEventListener?.("change", update);
    return () => {
      m1.removeEventListener?.("change", update);
      m2.removeEventListener?.("change", update);
    };
  }, []);
  return isTouch;
}

export function useMotionSettings() {
  const isMobile = useIsMobile();
  const isTouch = useIsTouchDevice();
  const shouldReduce = useReducedMotion();

  const multipliers = useMemo(() => {
    if (shouldReduce) return { duration: 0.0, delay: 0.0, distance: 0 };
    if (isMobile || isTouch) return { duration: 0.35, delay: 0.05, distance: 16 };
    return { duration: 0.8, delay: 0.1, distance: 40 };
  }, [isMobile, isTouch, shouldReduce]);

  return { isMobile, isTouch, shouldReduce, multipliers };
}

export function getTransition(
  options?: { duration?: number; delay?: number; ease?: any }
) {
  // Defaults are tuned for desktop; consumers should pass mobile-aware values from useMotionSettings
  const { duration = 0.8, delay = 0, ease = "easeOut" } = options || {};
  return { duration, delay, ease };
}

export function fadeInUpVariants(distance: number) {
  return {
    hidden: { opacity: 0, y: distance },
    show: { opacity: 1, y: 0 },
  } as const;
}

export function rotateWiggleVariants() {
  return {
    animate: { rotate: [0, 6, -6, 0] as number[] },
  } as const;
}

export function bounceYSmallVariants() {
  return {
    animate: { y: [0, 3, 0] as number[] },
  } as const;
}

export function shouldUseLayoutAnimation(shouldReduce: boolean, isMobile: boolean) {
  return !shouldReduce && !isMobile;
}


