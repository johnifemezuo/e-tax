import React from "react";
// import Loader from "../theme/Svg/Loader";

function ButtonFlat({
  click,
  customStyle,
  children,
  disabled,
  placeholder,
}) {
  return (
    <div className="flex items-center space-x-3 ">
      <h4 className="text-md italic text-gray-400">
        {placeholder ? "Active" : "Disabled"}
      </h4>
      <button
        disabled={disabled}
        className={`${customStyle}  shadow-lg/50 buttonNeutral flex 
       cursor-pointer items-center rounded-md font-normal first-letter:uppercase focus:outline focus:outline-4   
        dark:border-gray-500 dark:bg-gray-600 dark:text-gray-400`}
        onClick={click}
      >
        {click ? "Active" : "Disabled"}
      </button>
    </div>
  );
}

export default ButtonFlat;
