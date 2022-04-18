import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import NotificationIcon from "../icons/Svg/NotificationIcon";
import NotificationMessage from "./NotificationMessage";

export default function Example() {
  return (
    <div className=" mr-6 w-full px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group text-lightBlue theme-transition dark:darkThemeBg-lighter inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <div className="hover:text-lightBlue relative ">
                <NotificationIcon className="md:h-7  md:w-6" />
                <span className="bg-redColor absolute top-0 right-0 inline-block h-2 w-2 rounded-full"></span>
              </div>
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
              <Popover.Panel className="absolute z-10 mr-12 mt-3 w-[350px]  -translate-x-3/4 transform px-4 sm:px-0 lg:max-w-2xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="dark:darkThemeBg theme-transition dark:darkThemBg-border relative overflow-hidden bg-white">
                    <h3 className="text-textgray bg-blue-50 px-6 pb-2 pt-4 text-lg font-semibold dark:bg-gray-500 dark:text-gray-200">
                      Notifications
                    </h3>
                    <NotificationMessage />
                    <NotificationMessage />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
