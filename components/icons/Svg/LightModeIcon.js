import React from "react";

function LightModeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={`${className} h-6 w-6`}
    >
      <path
        d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z"
        stroke="currentColor"
        strokeLinecap="square"
      ></path>
    </svg>
  );
}

export default LightModeIcon;

