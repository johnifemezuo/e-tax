import React from "react";
import SwitchButton from "../../UI/SwitchButton/SwitchButton";
import PlanCard from "./PlanCard";

function Plan() {
  return (
    <div>
      <div className="py-12 mt-16 px-4">
        <h1 className="dark:darkTheme-text theme-transition text-4xl font-bold">
          Plans
        </h1>

        <p className=" dark:darkTheme-text theme-transition mt-6">
          This Workspace`s Basic Plan is set to $34 per month and will renew on
          July 9, 2021
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <p className=" dark:darkTheme-text theme-transition">Monthly</p>
          <SwitchButton switchTxt={false} />
          <p className="dark:darkTheme-text theme-transition ">
            Annually <span className="text-green-500">(-20%)</span>
          </p>
        </div>

        <div className="grid-cols-3 gap-6 md:block lg:grid">
          <PlanCard
            planTitle="Basic"
            planAmount="14"
            buttonTxt="Downgrade"
            planBg="bg-green-300 "
            btnColor="white hover:bg-gray-50 border"
          />
          <PlanCard
            planTitle="Standard"
            planAmount="34"
            buttonTxt="current Plan"
            planBg="bg-blue-300"
            btnColor="gray-100 hover:bg-gray-50 border"
          />
          <PlanCard
            planTitle="Plus"
            planAmount="74"
            buttonTxt="Upgrade"
            planBg="bg-pink-300"
            btnColor="lightBlue text-white hover:bg-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

export default Plan;
