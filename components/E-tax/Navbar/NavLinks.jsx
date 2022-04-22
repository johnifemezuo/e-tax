import Link from "next/link";
import React from "react";
import Button from "../../Dashboard/UI/Button/Button";

function NavLinks() {
  return (
    <nav className=" mt-12 w-full  md:mt-0 ">
      <ul className="items-center justify-between space-y-6 font-semibold uppercase md:flex  md:space-x-12 md:space-y-0 ">
        <li>
          <Link href={`/`}>
            <a className="text-primaryDark hover:text-darkgray text-sm font-medium transition">
              Revenue Agents
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/`}>
            <a className="text-primaryDark hover:text-darkgray text-sm font-medium transition">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/`}>
            <a className="text-primaryDark hover:text-darkgray text-sm font-medium transition">
              Contact Us
            </a>
          </Link>
        </li>

        <Link href="/auth/login">
          <a className="">
            <Button customStyle="bg-[#FFC359] mt-12 md:mt-0 text-primaryDark hover:bg-[#F5A312] hover:text-white">
              sign In now
            </Button>
          </a>
        </Link>
        {/* <button className="text-primaryDark bg-primary p-6 py-4 font-medium">
          sign in now
        </button> */}
      </ul>
    </nav>
  );
}

export default NavLinks;
