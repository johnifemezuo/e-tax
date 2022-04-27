import Container from "../../../layout/Container";
import React from "react";

function TopNav() {
  return (
    <div className="bg-primaryDark hidden w-full  py-2 md:block  ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4  text-sm">
            <strong className="font-semibold text-white">
              Monday - Friday
            </strong>
            <p className=" text-[#A0A0A0]">8AM - 5PM</p>
          </div>
          <div className="flex items-center space-x-4  text-sm">
            <strong className="font-semibold text-white">Head Office</strong>
            <p className=" text-[#A0A0A0]">
              No 1 Esther Obiakor Estate Agu-Awka, Awka
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopNav;
