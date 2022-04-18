import React from "react";
import EachPlan from "./EachPlan";
import PlanButton from "./PlanButton";

function Plan() {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform bg-white py-6 shadow-2xl">
        {/* The heading and the icon div container */}
        <div className="flex items-center justify-between border-b-2 px-6 pb-4">
          {/* the change your plan header */}
          <h2 className="text-2xl font-bold">Change your Plan</h2>

          {/* The svg for the plan container */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* The upgrade or downgrade your plan container */}
        <div className="py-6 px-6 text-xl">
          {/* The upgrade or downgrade plan header */}
          <h2 className="mb-4">Upgrade or downgrade your plan</h2>

          {/* The each plan component */}
          <EachPlan
            border="border-violet-700"
            svgConfig="rounded-full border-4 border-violet-700 text-violet-700"
            planName="mosaic light"
            planValue="current Plan"
            dot={<span className="h-1 w-1 rounded-full bg-gray-500"></span>}
            blockLimit="500 block limits"
            mb="2 mb"
            members="1 member"
            price="$39.00"
          />

          <EachPlan
            planName="mosaic basic"
            bestValue={
              <div className="flex gap-x-1.5">
                <p className=" font-semibold capitalize italic text-violet-700 ">
                  best value
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            }
            dot={<span className="h-1 w-1 rounded-full bg-gray-500"></span>}
            blockLimit="1000 block limits"
            mb="5 mb"
            members="2 members"
            price="$59.00"
          />

          <EachPlan
            planName="mosaic plus"
            dot={<span className="h-1 w-1 rounded-full bg-gray-500"></span>}
            blockLimit="500 block limits"
            mb="2 mb"
            members="1 member"
            price="$79.00"
          />

          {/* The note board container */}
          <p className="mt-6 text-base">
            Your workspaces Mosaic Light Plan is set to $39 per month and revew
            on August 9, 2021
          </p>
        </div>

        <div className="flex items-center justify-end gap-x-2 px-6">
          <PlanButton border="border-2" value="cancel" />
          <PlanButton
            bgColor="bg-violet-700"
            textColor="text-white"
            value="change plan"
          />
        </div>
      </div>
    </>
  );
}

export default Plan;
