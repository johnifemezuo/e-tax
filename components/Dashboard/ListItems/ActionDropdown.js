import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import MorevertIcon from "../icons/Svg/MorevertIcon"

function ActionDropdown({ children }) {
  return (
    <div className="w-full max-w-sm px-4  ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                  rounded-md  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <MorevertIcon className="h-6 w-6 dark:text-white" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-4 z-10 mt-3 -translate-x-2/3 transform  sm:px-0 ">
                <div className=" relative rounded-lg dark:bg-gray-600 bg-white p-3  pr-5 shadow-lg ring-1 ring-black ring-opacity-5">
                  {children}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default ActionDropdown;
