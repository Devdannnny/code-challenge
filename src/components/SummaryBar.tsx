import React from "react";

interface SkipOption {
  id: number;
  size: number;
  price: number;
  hirePeriod: string;
  image?: string;
}

interface SummaryBarProps {
  skip: SkipOption | null;
  onContinue: () => void;
  onBack: () => void;
}

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
