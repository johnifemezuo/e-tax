import { useAtom } from "jotai";
import React from "react";
import Footer from "../components/E-tax/Footer/Footer";
import Navbar from "../components/E-tax/Navbar/Navbar";
import { openSideBar } from "../stores/siteAtom";

function Layout({ children }) {
  const [openSideNav] = useAtom(openSideBar);

  return (
    <div
      style={openSideNav ? { marginRight: "0" } : { marginRight: "250px" }}
      className="overflow-x-hidden transition-all md:w-full  duration-500"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
