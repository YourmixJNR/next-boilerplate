import confetti from "canvas-confetti";
import { useCallback } from "react";

const useConfetti = () => {
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
