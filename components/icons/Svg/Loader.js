import React from "react";

function Loader({ className }) {
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="200.000000pt"
        height="200.000000pt"
        viewBox="0 0 200.000000 200.000000"
        preserveAspectRatio="xMidYMid meet"
        className={`w-5 h-5  text-gray-300 animate-spin ${className}`}
      >
        <g
          transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M835 1906 c-218 -42 -414 -160 -550 -329 -60 -75 -145 -223 -145
-252 0 -10 47 -35 66 -35 1 0 19 33 38 74 212 441 764 608 1184 358 149 -89
284 -245 348 -405 17 -43 35 -78 38 -79 4 0 20 2 37 6 29 6 31 8 25 39 -12 59
-95 211 -160 292 -171 214 -406 331 -686 340 -81 3 -150 0 -195 -9z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Loader;
