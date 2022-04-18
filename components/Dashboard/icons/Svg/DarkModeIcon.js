import React from "react";

function DarkModeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      className={`${className} h-6 w-6`}
    >
      <path
        d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
        stroke="currentColor"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export default DarkModeIcon;
