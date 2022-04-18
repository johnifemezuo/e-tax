import React from "react";
import TrenddingUp from "../Svg/TrenddingUp";
import TreningDown from "../Svg/TreningDown";
import Header from "./Header/Header";

export default function Main() {
  return (
    <div className="w-5/6		m-auto">
      <Header />
      <section>
        <div className="flex justify-between mt-12">
          <div className="flex justify-between w-full">
            <div>
              <h3 className="font-semibold text-sm">Avaliable to payout</h3>
              <h1 className="text-4xl font- font-medium py-5 pb-2"> $16.4k </h1>
              <p className="text-darkgray text-sm ">
                <span className="text-[#7d98d0] font-semibold">Payout</span> .
                $2.6k will be avaliable soon
              </p>
            </div>
            fdeeee
            <div className=" border-r border-gray-200 mx-16 h-full"></div>
          </div>

          <div className="w-full">
            <h3 className="font-semibold text-sm">Today revenue</h3>
            <h1 className="flex gap-2 text-4xl font- font-medium py-5 pb-2">
              {" "}
              $2.6k{" "}
              <div className="flex  items-center bg-[#fdeeee] text-[#d67a85] text-xs p-2 rounded-full">
                14%
                <TreningDown className="w-5 h-5" />
              </div>
            </h1>
            <p className="text-darkgray text-sm ">26 orders</p>
          </div>

          <div className="w-full">
            <h3 className="font-semibold text-sm">Avaliable to payout</h3>
            <div className=" text-4xl font- font-medium py-5 pb-2">
              366{" "}
              <span className="flex items-center bg-[#e3fbea] text-[#799b8a] text-xs px-3  rounded-full">
                14%
                <TrenddingUp className="w-5 h-5  inline" />
              </span>
            </div>

            <p className="text-darkgray text-sm ">2 Visitors right now</p>
          </div>
        </div>
      </section>

      <section>
      </section>
    </div>
  );
}
