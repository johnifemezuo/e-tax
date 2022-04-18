import React from 'react'

function CheckIcon({className}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} h-6 w-6`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokedWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default CheckIcon