import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  // Mobile: show progress circle and step labels
  // Desktop: show horizontal stepper
  return (
    <>
      <div className="stepper-mobile">
        <div className="stepper-progress-circle">
          <span className="stepper-progress-number">{currentStep + 1}</span>
          <span className="stepper-progress-total">of {steps.length}</span>
        </div>
        <div className="stepper-mobile-labels">
          <span className="stepper-mobile-current">{steps[currentStep]}</span>
          {currentStep < steps.length - 1 && (
            <span className="stepper-mobile-next">
              Next: {steps[currentStep + 1]}
            </span>
          )}
        </div>
      </div>
      <nav className="skip-stepper stepper-desktop">
        {steps.map((step, idx) => (
          <div
            key={step}
            className={`skip-step${idx === currentStep ? " active" : ""}${
              idx < currentStep ? " done" : ""
            }`}
          >
            <span className="skip-step-label">{step}</span>
            {idx < steps.length - 1 && <span className="skip-step-sep">→</span>}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Stepper;
