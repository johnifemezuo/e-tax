import React from "react";

function MenuIcon({onClick}) {
  return (
    <span onClick={onClick}>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        className="text-white"
      >
        <path
          d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15"
          stroke="currentColor"
        ></path>
      </svg>
    </span>
  );
}

export default MenuIcon;
