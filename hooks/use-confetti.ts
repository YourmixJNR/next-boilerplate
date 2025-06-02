import confetti from "canvas-confetti";
import { useCallback } from "react";

/**
 * custom React hook that returns a function to trigger a confetti animation.
 *
 * the returned function, when called, fires a confetti effect with predefined
 * particle count, spread, origin, and color palette.
 *
 * @returns {() => void} a callback function to trigger the confetti animation.
 *
 */

const useConfetti = (): (() => void) => {
  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#4f46e5", "#166534", "#0891b2", "#be185d"],
    });
  }, []);

  return fireConfetti;
};

export default useConfetti;
