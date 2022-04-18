import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function SwitchButton(switchTxt) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      {switchTxt === "true" ? (
        " "
      ) : (
        <h4 className="text-md transition-ll italic text-gray-400">
          {enabled ? "On" : "Off"}
        </h4>
      )}

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-lightBlue" : "bg-blue-200"}
          relative inline-flex h-[33px] w-[64px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-8" : "translate-x-0"}
            pointer-events-none inline-block h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}

export default SwitchButton;
