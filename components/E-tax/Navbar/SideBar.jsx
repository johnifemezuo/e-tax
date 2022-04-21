import React from "react";
import { useAtom } from "jotai";
import { openSideBar } from "../../../stores/siteAtom";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Container from "../../../layout/Container";

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

        <div className="bg-primaryDark w-full absolute bottom-0 right-0 left-0 py-12 md:block  ">
          <Container>
            <div className="grid n">
              <div className="space-y-4  text-sm">
                <strong className="font-semibold text-white">
                  Monday - Friday
                </strong>
                <p className=" text-[#A0A0A0]">8AM - 5PM</p>
              </div>
              <div className="space-y-4 mt-6  text-sm">
                <strong className="font-semibold text-white">
                  Head Office
                </strong>
                <p className=" text-[#A0A0A0]">
                  No 1 Esther Obiakor Estate Agu-Awka, Awka
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
