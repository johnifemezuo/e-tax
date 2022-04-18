import React from "react";
import Loader from "../../icons/Svg/Loader";
// import Loader from "../theme/Svg/Loader";

function ButtonDanger({ click, customStyle, children, disabled, isloading }) {
  return (
    <button
      disabled={disabled}
      className={`${customStyle}text-center theme-transition shadow-lg/50 buttonNeutral flex cursor-pointer items-center border  border-gray-300 bg-white text-gray-600
       first-letter:uppercase  hover:bg-gray-100
        focus:outline focus:outline-4 dark:border-gray-500`}
      onClick={click}
    >
      {children}
      {isloading ? <Loader /> : ""}
    </button>
  );
}

export default ButtonDanger;
