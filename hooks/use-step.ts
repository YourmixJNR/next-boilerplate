import { useState } from "react";

/**
 * custom React hook to manage a step-based workflow.
 *
 * @returns {Object} an object containing the current step, functions to set the current step,
 * next step, and previous step.
 *
 * @remarks
 * this hook is useful for multi-step forms or wizards.
 * the initial step is set to 1.
 */

export function useStep(): object {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return {
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
  };
}
