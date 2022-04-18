import { UsersIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import useTheme from "../hooks/useTheme";
import Container from "../layout/Container";
import BarsIcoin from "./icons/Svg/BarsIcoin";
import DarkModeIcon from "./icons/Svg/DarkModeIcon";
import LightModeIcon from "./icons/Svg/LightModeIcon";
import AddingAssert from "./MediaLibrary/AddingAssert";
import NotificationDrop from "./NotificationDrop/NotificationDrop";
import AsideHeaderDropdown from "./Sidebar/AsideHeaderDropdown/AsideHeaderDropdown";
import Sidebar from "./Sidebar/Sidebar";
import Search from "./UI/Search/Search";

export default function AdminLayout({ children }) {
  const [colorTheme, setTheme] = useTheme();

  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState("");

  const openHandler = () => {
    setOpen(!open);
    open ? setLeft("left-0 ") : setLeft("-left-full");
  };

  return (
    <div>
      <div className=" dark:darkThemeBg theme-transition dark:darkThemeBg-border fixed top-0 left-0 right-0 z-50  hidden  w-full items-center justify-between space-x-4 border-b border-gray-100  bg-white py-4 px-6 md:block">
        <div className="flex items-center justify-between ">
          <div className="">
            <AsideHeaderDropdown
              dropdownitems={[
                { item: "Invite People ", link: "dashboard/settings" },
                { item: "Preferences ", link: "dashboard/settings" },
                { item: "Tools", link: "dashboard/settings" },
                { item: "Live Chart", link: "dashboard/settings" },
              ]}
            />
          </div>

          <div className="flex items-center space-x-6">
            <div>
              <Search />
            </div>
            <div className="flex">
              <NotificationDrop />
              <div
                onClick={() => setTheme(colorTheme)}
                className="text-primary-color duration-400 overflow theme-transition rounded-full bg-gray-700 px-3.5 py-4  shadow-2xl transition duration-300 hover:cursor-pointer    hover:bg-[#262338]  hover:text-white dark:bg-gray-500  dark:text-white  dark:hover:bg-[#e6e4f33d] "
              >
                {colorTheme === "light" ? (
                  <LightModeIcon className="text-gray-200 dark:text-gray-200 md:h-5  md:w-6 " />
                ) : (
                  <DarkModeIcon className="text-gray-200 md:h-5  md:w-6 " />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 h-screen w-full ">
        <div className="md:grid md:grid-cols-10 lg:grid-cols-4 xl:grid-cols-6">
          {/* -----------------------middle contents------------------- */}

          <div>
            <div
              className="flex justify-between  py-3 px-7 md:hidden"
              onClick={openHandler}
            >
              <BarsIcoin className="text-darkgray h-7 w-7" />
              <UsersIcon className="text-darkgray h-7 w-7" />
            </div>

            <div className=" bg-sidebar relative z-50 flex w-full items-center space-x-4 border-b border-gray-100 py-4 px-6 md:hidden ">
              <div className="">
                <AsideHeaderDropdown
                  dropdownitems={[
                    { item: "Invite People ", link: "dashboard/settings" },
                    { item: "Preferences ", link: "dashboard/settings" },
                    { item: "Tools", link: "dashboard/settings" },
                    { item: "Live Chart", link: "dashboard/settings" },
                  ]}
                />
              </div>
            </div>

            <div
              className={` fixed left-0 z-10 w-full transition  duration-500 ease-in-out  md:relative  md:-left-0  ${left}`}
            >
              <Sidebar closeNavbar={() => setLeft("-left-full")} />
            </div>
          </div>

          {/* -----------------------right Navbar------------------- */}
          <div className="theme-transition mt-10 h-screen overflow-y-auto bg-slate-100/30 py-2 px-2 dark:bg-gray-700 md:col-span-9 lg:col-span-3 xl:col-span-5">
            <Container>{children}</Container>
          </div>
        </div>
      </div>

      {/* ------revealing all modal-------- */}
      <div className="fixed right-0 top-0 z-50 h-screen">
        <AddingAssert />
      </div>
    </div>
  );
}
