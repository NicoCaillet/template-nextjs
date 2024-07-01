"use client";

import { createContext, useState } from "react";

type StepperContextProvider = {
  children: React.ReactNode;
};

type TStepperContext = {
  step: number;
  handleNextValue: () => void;
  handlePrevValue: () => void;
  incrementByAmout: (steps: number) => void;
};

export const StepperContext = createContext<TStepperContext | null>(null);

export default function StepperContextProvider({
  children,
}: StepperContextProvider) {
  // state
  const [step, setStep] = useState(1);

  // derived state

  // event handlers / actions
  const handleNextValue = () => {
    setStep(step + 1);
  };
  const handlePrevValue = () => {
    setStep(step - 1);
  };

  const incrementByAmout = (steps: number) => {
    setStep(step + steps);
  };

  // const decrementByAmount = (steps: number) => {
  //   setStep(step + steps);
  // };

  return (
    <StepperContext.Provider
      value={{
        step,
        handleNextValue,
        handlePrevValue,
        incrementByAmout,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
}
