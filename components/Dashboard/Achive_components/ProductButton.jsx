import React from "react";

function ProductButton({children}) {
  return (
    <>
      <button
        className="rounded-md py-2.5 border px-4 font-semibold capitalize text-lightBlue hover:bg-lightBlue hover:text-white dark:border-gray-600 dark:text-gray-30">
       {children}
      </button>
    </>
  );
}

export default ProductButton;
