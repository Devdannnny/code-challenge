import { useEffect, useState } from "react";
import { fetchSkips } from "./api/skips";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import SkipCard from "./components/SkipCard";
import Stepper from "./components/Stepper";
import SummaryBar from "./components/SummaryBar";
import { SkipOption } from "./types/skip";

const steps = [
  "Postcode",
  "Waste Type",
  "Select Skip",
  "Permit Check",
  "Choose Date",
  "Payment",
];

const stepDescriptions = [
  "Enter your postcode to find local skip options.",
  "Select the type of waste you want to dispose of.",
  "Choose the skip size that best suits your needs.",
  "Check if you need a permit for your skip location.",
  "Pick a delivery and collection date for your skip.",
  "Review your order and make payment securely."
];

function App() {
  const [skips, setSkips] = useState<SkipOption[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    fetchSkips()
      .then(setSkips)
      .catch(() => setError("Failed to load skip options."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="skip-selector-root">
      <Stepper steps={steps} currentStep={2} stepDescriptions={stepDescriptions} />
      <div className="skip-content-container">
        <DarkModeToggle dark={dark} toggle={() => setDark((d) => !d)} />
        <h1 className="skip-title">Choose Your Skip Size</h1>
        <p className="skip-subtitle">
          Select the skip size that best suits your needs
        </p>
        {loading ? (
          <div className="skip-loading">
            <svg viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="90 150"
              />
            </svg>
          </div>
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
    </div>
  );
}

export default App;
