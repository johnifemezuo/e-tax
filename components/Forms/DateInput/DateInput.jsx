import React from 'react'

function DateInput() {
  return (
    <div className="">
      {/* The product date */}
      <label className="font-semibold capitalize">Product date</label>
      <div className="mt-2 flex w-full items-center rounded border p-4 dark:border-gray-600">
        <input
          type="date"
          placeholder="EU-44"
          className="w-full bg-inherit outline-none"
        />
      </div>
    </div>
  );
}

export default DateInput