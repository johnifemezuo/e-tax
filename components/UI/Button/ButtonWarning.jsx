import React from "react";
import Loader from "../Svg/Loader";

function ButtonWarning({
  click,
  className = "px-4",
  disabled,
  children,
  isloading,
}) {
  return (
    <div>
      <button
        disabled={disabled}
        className={`${className} disabled:bg-yellow-200 bg-yellow-400 disabled:cursor-not-allowed text-gray-600 py-1 font-normal first-letter:uppercase cursor-pointer shadow-lg/50 rounded-md focus:outline focus:outline-yellow-100 focus:outline-4 flex items-center gap-2`}
        onClick={click}
      >
        {children}
        {isloading ? <Loader /> : ""}
      </button>
    </div>
  );
}

export default ButtonWarning;
