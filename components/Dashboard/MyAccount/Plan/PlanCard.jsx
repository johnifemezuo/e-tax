import React from "react";
import Button from "../../UI/Button/Button";
import CheckIcon from "../../icons/Svg/CheckIcon";
import AddIcon from "../../icons/Svg/AddIcon";

function PlanCard({ planTitle, planAmount, planBg, buttonTxt, btnColor }) {
  return (
    <div>
      <div className="theme-transition mt-6 rounded-md  border  border-t-4 border-t-green-500">
        <div className="space-y-2 border-b py-4 px-6">
          <h3 className="flex items-center space-x-2  text-2xl font-semibold">
            <span className={`flex rounded-full ${planBg} % p-0.5 text-white`}>
              <AddIcon />
            </span>{" "}
            <span className="dark:darkTheme-text theme-transition">
              {planTitle}
            </span>
          </h3>
          <p className="text-darkgray dark:darkTheme-text theme-transition py-1 text-lg">
            Ideal for individuals that need custom solution with custom tool.
          </p>
          <div className="flex items-baseline pb-2">
            <h2 className="dark:darkTheme-text theme-transition text-5xl font-bold">
              ${planAmount}
            </h2>
            <span className="text-darkgray"> /mo</span>
          </div>
          <Button
            customStyle={`mb-2 w-full text-center dark:darkTheme-text theme-transition capitalize font-semibold bg-${btnColor} transition-all font-medium focus:outline-blue-100 focus:text-{btnColor}  focus:bg-redColor`}
          >
            {buttonTxt}
          </Button>
        </div>
        <div className="px-6 pb-16 pt-4">
          <h3 className=" dark:darkTheme-text theme-transition font-semibold uppercase">
            what is included
          </h3>
          <ul className="mt-5 space-y-2">
            <li className="flex   items-center space-x-2">
              <CheckIcon className="text-greenColor md:h-7  md:w-7" />
              <p className="dark:darkTheme-text theme-transition">
                {" "}
                Lorem ipsum dolor sit.
              </p>
            </li>
            <li className="flex  items-center space-x-2">
              <CheckIcon className="text-greenColor md:h-7  md:w-7" />
              <p className="dark:darkTheme-text theme-transition">
                {" "}
                adipisicing dicta dolor Consequuntur .
              </p>
            </li>
            <li className="flex  items-center space-x-2">
              <CheckIcon className="text-greenColor md:h-7  md:w-7" />
              <p className="dark:darkTheme-text theme-transition">
                {" "}
                consectetur adipisicing elit.
              </p>
            </li>
            <li className="flex  items-center space-x-2">
              <CheckIcon className="text-greenColor md:h-7  md:w-7" />
              <p className="dark:darkTheme-text theme-transition">
                {" "}
                Consequuntur dicta officiis culpa?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
