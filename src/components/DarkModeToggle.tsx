import React from "react";

const DarkModeToggle: React.FC<{ dark: boolean; toggle: () => void }> = ({
  dark,
  toggle,
}) => (
  <button
    onClick={toggle}
    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      position: "absolute",
      top: 18,
      right: 18,
      zIndex: 200,
      padding: 0,
    }}
  >
    {dark ? (
      // Sun SVG
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="#facc15" />
        <g stroke="#facc15" strokeWidth="2">
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    ) : (
      // Moon SVG
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 12.79A9 9 0 0111.21 3a7 7 0 100 18A9 9 0 0021 12.79z"
          fill="#38bdf8"
        />
      </svg>
    )}
  </button>
);

export default DarkModeToggle;
