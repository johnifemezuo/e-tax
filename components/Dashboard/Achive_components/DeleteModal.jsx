import React from "react";
import Container from "../../layout/Container";

function DeleteModal() {
  return (
    <div className="fixed top-1/2 left-1/2 w-full max-w-xl -translate-y-1/2 -translate-x-1/2 transform rounded-md bg-white shadow-xl dark:bg-gray-600 dark:text-gray-300">
      {/* the confirmation header */}
      <div className="py-6 px-8">
        <h1 className="capitailize text-center text-2xl">confirmation</h1>
      </div>
      {/* the warning icon and the warning text */}
      <div className="flex flex-col items-center justify-center border-y py-16 px-10 dark:border-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-600"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>

        <p className="text-center font-semibold ">
          Are you sure you want to delete this?
        </p>
      </div>

      {/* The container containing the two buttons */}
      <div className="flex items-center gap-x-2 py-3 px-4">
        <button className="flex-grow rounded-lg border py-3 px-4 text-center font-semibold capitalize dark:border-gray-500">
          cancel
        </button>
        <button className="flex flex-grow items-center justify-center gap-x-2 rounded-lg border border-red-600 bg-red-100 py-3 px-4 text-center font-semibold capitalize text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="">confirm</p>
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
