import React from "react";

function FilterListIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
      className={`${className} h-6 w-6`}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </svg>
  );
}

export default FilterListIcon;
