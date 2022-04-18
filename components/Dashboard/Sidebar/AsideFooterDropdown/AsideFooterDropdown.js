import { Fragment, React, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Logo from "../../Logo/Logo";
import Image from "next/image";

function AsideFooterDropdown({ dropdownitems }) {
  return (
    <div>
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="dark:darkThemeBg-border theme-transition w-full cursor-pointer border-t  border-gray-200 bg-blue-50 dark:bg-gray-500">
                <div className="my-4 flex cursor-pointer items-center px-6 ">
                  <div className="overflow-hidden rounded-lg">
                    <div className="relative h-12   w-14">
                      <Image
                        src="/img/1.jpeg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="cover"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between md:hidden lg:flex">
                    <div className="ml-3">
                      <h1 className="dark:darkTheme-text theme-transition text-sm font-bold">
                        Oghenefoke Thompsson
                      </h1>
                      <p className="text-darkgray theme-transition dark:darkTheme-text text-left text-xs">
                        Thompsonn@gmail.com
                      </p>
                    </div>
                    <ChevronDownIcon
                      className={`${
                        open ? " rotate-180 transform" : ""
                      } text-darkgray h-5 w-5 dark:text-gray-200`}
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
                className="dark:darkThemeBg dark:darkThemeBg-border absolute -top-80 mx-6 mt-3 w-full rounded-md border bg-white p-3 shadow-md shadow-gray-300/50 dark:shadow-gray-500/50"
                static
              >
                <div className="my-2 flex cursor-pointer items-center gap-2 p-2 ">
                  <div className="overflow-hidden rounded-sm">
                    <div className="relative h-12  w-12">
                      <Image
                        src="/img/1.jpeg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="cover"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="dark:darkTheme-text pb-1 text-sm font-bold">
                      Oghenefoke Thompsson
                    </h1>
                    <p className="text-darkgray  dark:darkTheme-text text-xs">
                      Thompsonn@gmail.com{" "}
                    </p>
                  </div>
                </div>

                {dropdownitems &&
                  dropdownitems.map(({ item, link, icon }, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <Link href={link}>
                            {index === 3 ? (
                              <div>
                                <div className="border-grey my-2 dark:darkThemeBg-border mb-3 border-b"></div>
                                <a className="text-darkgray dark:darkTheme-text flex items-center gap-1 text-sm leading-8 ">
                                  {icon && icon}
                                  <p>{item}</p>
                                </a>
                              </div>
                            ) : (
                              <a className="text-darkgray dark:darkTheme-text flex items-center gap-1  text-sm leading-8 ">
                                {icon && icon}
                                <p>{item}</p>
                              </a>
                            )}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}

                <button className="text-darkgray dark:darkTheme-text mt-3 block border-none  text-sm">
                  Log out
                </button>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

export default AsideFooterDropdown;
