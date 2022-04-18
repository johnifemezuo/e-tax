import { Fragment, React, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Logo from "../../Logo/Logo";

function AsideHeaderDropdown({ dropdownitems }) {
  return (
    <Menu as="div" className="relative z-50 w-[270px]">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="w-full cursor-pointer">
              <div className="cursor-pointern flex items-center gap-2 ">
                <div className="overflow-hidden rounded-lg ">
                  <Logo />
                </div>
                <div className="flex w-full  items-center justify-between md:hidden lg:flex">
                  <div className="ml-2 text-left">
                      <h1 className="theme-transition text-xl font-semibold capitalize text-gray-600 dark:text-gray-200">
                        Creatovis
                      </h1>
                    <h2 className="flex items-center space-x-3 text-left text-xs font-medium text-green-500">
                      {" "}
                      <span className="mr-2 flex h-1.5  w-1 rounded-full bg-green-500 p-0.5"></span>{" "}
                      Online
                    </h2>
                  </div>
                  <ChevronDownIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } text-darkgray h-5 w-5 `}
                  />
                </div>
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="dark:darkThemeBg dark:darkThemeBg-border dark:darkThemeBg-border theme-transition absolute mt-3 w-full rounded-lg border bg-white p-3 shadow-md shadow-gray-300/50 dark:shadow-gray-500/50"
              static
            >
              <div className="flex cursor-pointer items-center gap-2">
                <div className="overflow-hidden rounded-lg">
                  <Logo logoclasses="w-10 w-10" />
                </div>
                <div>
                  <h1 className="dark:darkTheme-text text-sm dark:font-semibold">
                    Creatovis
                  </h1>
                  <h2 className="text-darkgray dark:darkTheme-text text-xs">
                    Premuim
                  </h2>
                </div>
              </div>
              <div className="border-grey dark:darkThemeBg-border theme-transition my-6 mb-3 border-b"></div>
              <p className="text-darkgray dark:darkTheme-text pb-4 text-sm">
                Reference site about Lorem Ipsum, giving information on its
                origins, as well as a random Lipsum generator.
              </p>
              {dropdownitems &&
                dropdownitems.map(({ item, link }, index) => {
                  return (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <Link href={link}>
                          <a className="text-lightBlue block text-sm  leading-7 dark:text-blue-300 ">
                            {item}
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  );
                })}

              <div className="border-grey dark:darkThemeBg-border theme-transition my-6 mb-3 border-b"></div>

              <button className="text-lighBlue dark:darkTheme-text block border-none  text-sm">
                Log out
              </button>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default AsideHeaderDropdown;
