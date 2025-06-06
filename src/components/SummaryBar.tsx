import React from "react";
import { SummaryBarProps } from "../types/skip";


const SummaryBar: React.FC<SummaryBarProps> = ({
  skip,
  onContinue,
  onBack,
}) => (
  <div className="skip-summary-bar">
    <div className="skip-summary-info">
      {skip ? (
        <>
          <span>{skip.size} Yard Skip</span>
          <span>£{skip.price}</span>
          <span>{skip.hirePeriod}</span>
        </>
      ) : (
        <span>No skip selected</span>
      )}
    </div>
    <div className="skip-summary-actions">
      <button className="skip-summary-back" onClick={onBack}>
        Back
      </button>
      <button
        className="skip-summary-continue"
        onClick={onContinue}
        disabled={!skip}
      >
        Continue
      </button>
    </div>
  </div>
);

export default SummaryBar;
