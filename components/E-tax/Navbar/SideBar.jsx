import React from "react";
import { useAtom } from "jotai";
import { openSideBar } from "../../../stores/siteAtom";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import Link from "next/link";

function SideBar() {
  const [sidebar] = useAtom(openSideBar);

  return (
    <div
      className={`fixed  top-0 right-0  h-screen overflow-x-hidden bg-[#FFFCF6] pt-3 transition-all duration-500 ease-in-out md:hidden ${
        sidebar ? " w-0 " : " w-[250px] md:w-full"
      }`}
    >
      <div className="px-6 ">
        <div className="h-14 w-20">

        <Logo />
        </div>

        <div className="md:hidden">
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
