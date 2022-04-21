import Image from "next/image";
import React from "react";
import Container from "../../../layout/Container";
import Button from "../../Dashboard/UI/Button/Button";

function AboutSection() {
  return (
    <div className="  w-full h-full md:mt-0 mt-[200px] md:flex">
      <div className="  items-center space-y-6 py-20 md:flex md:flex-row-reverse md:space-y-0 md:py-0">
        <div className="reveal -mt-[150px] px-6 md:w-[500px] md:pl-20">
          <h1 className="text-primaryDark w-auto text-4xl font-bold leading-tight md:text-4xl md:leading-tight">
            <span className="text-primary"> Why You Need to </span> <br /> Pay
            Your Tax
          </h1>
          <p className="text-textColor mt-8 text-base font-medium leading-loose md:w-[500px]">
            Grow with us as you register and pay your tax with our online
            platefor you users who wants to join or pay at their own
            convenience.
          </p>
          <div className="mt-8 flex items-center justify-between">
            <Button
              customStyle={`text-white bg-primaryDark hover:bg-neutral-700`}
            >
              Register Now
            </Button>
            <img src="" alt="" />
          </div>
        </div>
        <div className="relative pt-12 md:flex-1 md:pt-0">
          <img
            src="/img/Rectangle 49.png"
            alt="about Image"
            className="z-0  h-auto w-full object-cover md:h-[700px] md:w-[500px] lg:w-[700px]"
          />
          <div className="reveal bg-primary relative z-50 -mt-4 flex justify-between space-x-8 px-12 py-12 md:z-40 md:-mt-[100px] md:ml-[200px] md:w-[600px]">
            <div className="space-y-6  text-white">
              <h2 className="text-4xl font-bold">200+</h2>
              <p className="border-t border-[#FFC155] pt-4 pb-6">
                Good Roads, Schools and Electricity
              </p>
            </div>
            <div className="space-y-6  text-white">
              <h2 className="text-4xl font-bold">350+</h2>
              <p className="border-t border-[#FFC155] pt-4 pb-6">
                Pipe Bourne Water… E.T.C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
