import React from "react";

export const Logo = ({ theme }: { theme: "light" | "dark" }) => (
  <svg
    width="160"
    height="56"
    viewBox="0 0 160 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Example: Replace with your actual logo paths */}
    <text x="0" y="35" fontFamily="sans-serif" fontWeight="bold" fontSize="32" fill={theme === "dark" ? "#fff" : "#222"}>
      FLASH
    </text>
    {/* Flash icon in the center */}
    <polygon points="85,10 95,28 89,28 99,46 79,23 86,23" fill="#FFD600" />
    <text x="105" y="40" fontFamily="cursive" fontSize="32" fill={theme === "dark" ? "#fff" : "#222"}>
      Space
    </text>
  </svg>
);
