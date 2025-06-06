import React from "react";
import { StepperProps } from "../../types/skip";

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, stepDescriptions = [] }) => {
  return (
    <>
      {/* Mobile Stepper */}
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

      {/* Vertical Stepper (Desktop) */}
      <aside className="vertical-stepper">
        <ol className="vertical-stepper-list">
          {steps.map((step, idx) => (
            <li
              key={step}
              className={`vertical-stepper-item${idx === currentStep ? " active" : ""}${idx < currentStep ? " done" : ""}`}
            >
                   {idx < steps.length - 1 && <span className={`vertical-stepper-line ${idx === currentStep ? " active" : ""}${idx < currentStep ? " done" : ""}`} />}
              <div className="vertical-stepper-marker">
                {idx < currentStep ? (
                  <span className="vertical-stepper-check">✓</span>
                ) : (
                  <span className="vertical-stepper-circle" />
                )}
           
              </div>
              <div className="vertical-stepper-content">
                <div className="vertical-stepper-title">{step}</div>
                <div className="vertical-stepper-desc">{stepDescriptions[idx] || ''}</div>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    </>
  );
};

export default Stepper;
