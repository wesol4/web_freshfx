// Plik: SiSynthEyes.js (albo .tsx)
import React from "react";

const SiSynthEyes = ({ size = 32, color = "#fff", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <polygon
      points="16,4 28,12 28,24 16,32 4,24 4,12"
      fill="#fff"
      stroke="#c770f0"
      strokeWidth="1"
    />
    <polygon
      points="16,4 28,12 16,20 4,12"
      fill="#e5b8ff"
      stroke="none"
    />
    <polygon
      points="28,12 28,24 16,32 16,20"
      fill="#c770f0"
      stroke="none"
    />
    <polygon
      points="4,12 4,24 16,32 16,20"
      fill="#a445d8"
      stroke="none"
    />
  </svg>
);

export default SiSynthEyes;

