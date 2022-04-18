import React from "react";

function ButtonOutline({ customStyle, children, click, disabled }) {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`${customStyle} focus:text-lightBlue shadow-lg/50  buttonNeutral flex cursor-pointer 
       items-center rounded-md border font-normal  
        first-letter:uppercase focus:outline focus:outline-4`}
    >
      {children}
    </button>
  );
}

export default ButtonOutline;
