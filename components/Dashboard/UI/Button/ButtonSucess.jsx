import React from "react";
import Loader from "../../icons/Svg/Loader";

function ButtonSucess({ click, className = "px-4", disabled, children, isloading }) {
  return (
    <div>
      <button
        disabled={disabled}
        className={`${className} disabled:bg-green-200 disabled:cursor-not-allowed  bg-green-600 text-white buttonNeutral font-normal first-letter:uppercase cursor-pointer shadow-lg/50 rounded-md focus:outline focus:outline-green-100 focus:outline-4 flex items-center gap-1`}
        onClick={click}
      >
        {children}
        {isloading ? <Loader /> : ""}
      </button>
    </div>
  );
}

export default ButtonSucess;

