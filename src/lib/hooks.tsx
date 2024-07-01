import { StepperContext } from "@/contexts/stepper-context-provider";
import { useContext } from "react";

export function useStepperProvider() {
    const context = useContext(StepperContext);
  
    if (!context) {
      throw new Error("data not available");
    }
  
    return context;
  }
  