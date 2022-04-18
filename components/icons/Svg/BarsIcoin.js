import React from 'react';

function BarsIcoin({className}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`${className} h-6 w-6`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>
  );
}

export default BarsIcoin;
