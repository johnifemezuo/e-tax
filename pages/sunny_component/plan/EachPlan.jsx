import React from "react";

function EachPlan(props) {
  return (
    <>
      {/* Each plan : i did each plan to have a prop so that it can be very fexible to maintain */}
      <div
        className={`p-4 ${props.border} mt-4 flex cursor-pointer justify-between rounded-lg border-2`}>
        {/* The iicon and the plan details container */}
        <div className="flex items-center gap-x-4">
          {/* The icon svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${props.svgConfig}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          {/* The plan description container */}
          <div className="space-y-1">
            {/* The plan name and the plan value container */}
            <div className="flex">
              <p className="mr-1 text-xl font-bold capitalize">
                {props.planName}
              </p>
              <span className="self-start text-base capitalize italic">
                {props.planValue || props.bestValue}
              </span>
            </div>

            {/* mb, members and the block limits container */}
            <div className="flex items-center gap-x-1.5">
              <p className="uppercase">{props.mb}</p>
              {props.dot}
              <p className="">{props.members}</p>
              {props.dot}
              <p className="">{props.blockLimit}</p>
            </div>
          </div>
        </div>

        {/* The price per month container */}
        <div className="">
          <span className="text-2xl font-semibold text-green-700">
            {props.price}
            <span className="text-gray-500">/mo</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default EachPlan;
