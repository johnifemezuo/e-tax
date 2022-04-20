import { useAtom } from "jotai";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../../../layout/Container";
import { openSideBar } from "../../../stores/siteAtom";
import CancelIcon from "../Icon/svg/CancelIcon";
import MenuIcon from "../Icon/svg/MenuIcon";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

function Navbar() {
  const [sidebar, setSidebar] = useAtom(openSideBar);
  const openNav = () => setSidebar(!sidebar);

  return (
    <header className="bg-primary">
      <TopNav/>
      <Container>
        <main className="flex w-full items-center justify-between py-3 md:py-4">
                  <div className="h-14 w-20">
            <Logo />
          </div>

          <div
            className=" transition-all duration-500  md:hidden"
            onClick={openNav}
          >
            {sidebar ? <MenuIcon /> : <CancelIcon />}
          </div>

          <div className="hidden md:block">
            <NavLinks />
          </div>
        </main>
      </Container>
      {/* -----------------mobile nav---------- */}
      <SideBar />
    </header>
  );
}

export default Navbar;
