import React from "react";
import FilterListIcon from "../../icons/Svg/FilterListIcon";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Input from "../../Forms/Input/Input";


function Filter({children}) {
  return (
    <div>
      <div className="my-3 w-full max-w-sm">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
              ${open ? "" : "text-opacity-90"}
             flex items-center gap-1 rounded-md bg-gray-200 p-2 px-3  hover:bg-gray-300  hover:text-opacity-100 focus:outline-none focus:outline focus:outline-4 focus:outline-gray-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <p className="flex font-semibold ">
                  <span>Filter</span>
                  <FilterListIcon />
                </p>
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
                <Popover.Panel className="absolute top-8  z-10 mt-3 -translate-x-1/3 transform  sm:px-0 ">
                  <div className=" relative w-[200px] rounded-lg  bg-white p-6 shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="inline-flex items-center space-x-6 pb-2">
                      <Input
                        inputConfig={{ type: "checkbox" }}
                        className="h-5 w-6"
                      />
                      <p>Date</p>
                    </div>
                    <div className="inline-flex items-center space-x-6 pb-2">
                      <Input
                        inputConfig={{ type: "checkbox" }}
                        className="h-5 w-6"
                      />
                      <p>Alphabetically</p>
                    </div>
                    <div className="inline-flex items-center space-x-6 pb-2">
                      <Input
                        inputConfig={{ type: "checkbox" }}
                        className="h-5 w-6"
                      />
                      <p>Name</p>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}

export default Filter;
