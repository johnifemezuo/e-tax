import React from 'react';

function FolderIcon({className}) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      className={`${className} h-6 w-6`}
    >
      <path
        d="M.5 12.5v-10a1 1 0 011-1h4l2 2h6a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1z"
        stroke="currentColor"
      ></path>
    </svg>
  );
}

export default FolderIcon;
