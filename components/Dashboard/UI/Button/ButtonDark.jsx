import React from 'react'

function ButtonDark({ click, customStyle, children, disabled, isloading }) {
  return (
    <button
      disabled={disabled}
      className={`${customStyle}text-center theme-transition   shadow-lg/50 bg-gray-700 text-white  buttonNeutral flex cursor-pointer
       items-center rounded-md first-letter:uppercase
        focus:outline focus:outline-4 dark:border-gray-500`}
      onClick={click}
    >
      {children}
      {/* {isloading ? <Loader /> : ""} */}
    </button>
  );
}

export default ButtonDark