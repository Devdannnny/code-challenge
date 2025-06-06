import React from "react";
import { SkipOption } from "../../types/skip";

interface SkipCardProps {
  skip: SkipOption;
  selected: boolean;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, selected, onSelect }) => (
  <div
    className={`skip-card${selected ? " selected" : ""}`}
    onClick={onSelect}
    tabIndex={0}
    role="button"
    aria-pressed={selected}
  >
    <div className="skip-card-img-wrap">
      {skip.image ? (
        <img
          src={skip.image}
          alt={`${skip.size} Skip`}
          className="skip-card-img"
        />
      ) : (
        <div className="skip-card-img-placeholder">No Image</div>
      )}
      <span className="skip-card-size-badge">{skip.size}</span>
    </div>
    <div className="skip-card-info">
      <div className="skip-card-title">{skip.size} Yard Skip</div>
      <div className="skip-card-period">{skip.hirePeriod}</div>
      <div className="skip-card-price">£{skip.price}</div>
    </div>
    <button
      className="skip-card-select-btn"
      aria-label={`Select ${skip.size} skip`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      {selected ? "Selected" : "Select"}
    </button>
  </div>
);

export default SkipCard;
