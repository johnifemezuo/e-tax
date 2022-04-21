import React from "react";
import Loader from "../../icons/Svg/Loader";
// import Loader from "../theme/Svg/Loader";

function Button({ click, customStyle, children, disabled, isloading }) {
  return (
    <button
      disabled={disabled}
      className={`${customStyle} text-center flex items-center theme-transition buttonNeutral cursor-point uppercase
        `}
      onClick={click}
    >
      {children}
      {isloading ? <Loader /> : ""}
    </button>
  );
}

export default Button;
