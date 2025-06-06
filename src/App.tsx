import React, { useEffect, useState } from "react";
import "./App.css";
import Stepper from "./components/Stepper";
import SkipCard from "./components/SkipCard";
import SummaryBar from "./components/SummaryBar";
import { fetchSkips } from "./api/skips";
import { SkipOption } from "./types/skip";

const steps = [
  "Postcode",
  "Waste Type",
  "Select Skip",
  "Permit Check",
  "Choose Date",
  "Payment",
];

function App() {
  const [skips, setSkips] = useState<SkipOption[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSkips()
      .then(setSkips)
      .catch(() => setError("Failed to load skip options."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="skip-selector-root">
      <Stepper steps={steps} currentStep={2} />
      <h1 className="skip-title">Choose Your Skip Size</h1>
      <p className="skip-subtitle">
        Select the skip size that best suits your needs
      </p>
      {loading ? (
        <div className="skip-loading">Loading skip options...</div>
      ) : error ? (
        <div className="skip-error">{error}</div>
      ) : (
        <div className="skip-grid">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selected={selectedSkip === skip.id}
              onSelect={() => setSelectedSkip(skip.id)}
            />
          ))}
        </div>
      )}
      <SummaryBar
        skip={skips.find((s) => s.id === selectedSkip) || null}
        onContinue={() => alert("Continue to next step")}
        onBack={() => alert("Go back")}
      />
    </div>
  );
}

export default App;
