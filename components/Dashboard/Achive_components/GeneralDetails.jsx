import React from "react";

function GeneralDetails() {
  return (
    <div className="px-4">
      <div className="mt-8 flex justify-between border-b-2  md:justify-start md:gap-x-6">
        {/* The general link */}
        <p className="w-full cursor-pointer border-b-2 border-blue-500 py-3 text-center capitalize md:w-min">
          General
        </p>

        {/* The connections link */}
        <p className="w-full cursor-pointer py-3 text-center capitalize md:w-min">
          connections
        </p>

        {/* The contributions link*/}
        <p className="w-full cursor-pointer py-3 text-center capitalize md:w-min">
          contributions
        </p>
      </div>
    </div>
  );
}

export default GeneralDetails;
