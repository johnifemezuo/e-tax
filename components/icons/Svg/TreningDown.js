import React from 'react';

export default function TreningDown({className}) {
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
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    </div>
  );
}
