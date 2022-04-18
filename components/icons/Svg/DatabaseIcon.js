import React from "react";

export default function DatabaseIcon({ className }) {
  return (
    <div>
      <svg
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        className={`${className} h-6 w-6`}
      >
        <path
          d="M0 15.5h15M1.5 4.5l6-3 6 3M0 6.5h15m-13.5 0v9m12-9v9m-9 0v-6h4v6"
          stroke="currentColor"
        ></path>
      </svg>
    </div>
  );
}
