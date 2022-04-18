import React, { useState } from "react";

function Input({ inputConfig, inputLabel,placeholder, error, className }) {
  const [value, setValue]= useState();


  
  return (
    <div className="relative w-full">
      <label className=" flex items-center dark:text-gray-400 text-lg text-gray-400">
        {inputLabel&& inputLabel}
      </label>
      <input
        placeholder={placeholder}
        onChange={(changeValues) => setValue(changeValues)}
        {...inputConfig}
        className={`${className} dark:darkTheme-text theme-transition my-1  w-full rounded-md border dar:border-gray-600 border-gray-300/50 p-2.5 placeholder:pl-2 placeholder:text-gray-300 focus:outline focus:outline-gray-300/50 dark:bg-gray-700 ${
          error ? "border-red-600" : "border-gray-300/50"
        }`}
      />
      {error && (
        <p className="b-0 absolute text-sm font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

export default Input;
