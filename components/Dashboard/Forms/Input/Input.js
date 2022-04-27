import React, { useState } from "react";

function Input({
  inputConfig,
  inputLabel,
  placeholder,
  error,
  className = "border border-gray-300/50 p-2 focus:outline focus:outline-gray-300/50",
}) {
  const [value, setValue] = useState();

  
  return (
    <div className={`relative  w-full `}>
      <label className="flex items-center text-lg text-gray-400 dark:text-gray-400">
        {inputLabel && inputLabel}
      </label>

      <input
        placeholder={placeholder}
        onChange={(changeValues) => setValue(changeValues)}
        {...inputConfig}
        className={`dark:darkTheme-text theme-transition my-1  w-full rounded-md  placeholder:pl-2
         placeholder:text-gray-300  dark:border-gray-600 dark:bg-gray-700  ${className} ${
          error ? " border-red-600" : " border-gray-300"
        }`}
      />
      {error && (
        <p className="b-0 absolute text-sm font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

export default Input;
