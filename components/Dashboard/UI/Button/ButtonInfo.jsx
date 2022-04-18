import React from "react";

function ButtonInfo({
  click,
  className,
  disabled,
  children,
  isloading,
}) {
  return (
      <button
        disabled={disabled}
        className={`${className} text-center bg-lightBlue text-white hover:bg-blue-400 transiton-all buttonNeutral 
         first-letter:uppercase cursor-pointer shadow-lg/50 rounded-md focus:outline focus:outline-blue-100 focus:outline-4`}
        onClick={click}
      >
        {children}
        {/* {isloading ? <Loader /> : ""} */}
      </button>
  );
}

export default ButtonInfo;
