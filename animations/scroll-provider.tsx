"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

type ScrollProviderProps = {
  children: React.ReactNode;
};

export default function ScrollProvider({ children }: ScrollProviderProps) {
  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    // initialize Lenis on the first render
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        anchors: true,
        duration: 1.6,
        easing: function (t: number) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        },
        infinite: false,
        // @ts-expect-error
        smooth: true,
      });
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }

    // clean up on component unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}
