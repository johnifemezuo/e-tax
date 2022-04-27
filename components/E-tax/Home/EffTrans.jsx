import React from "react";
import Container from "../../../layout/Container";

function EffTrans() {
  return (
    <div className="  relative w-full bg-primaryDark md:flex md:h-[700px]">
      <Container>
        <div className=" reveal relative pt-20  text-left md:w-[1100px] md:mt-36 md:py-0">
          <p className="text-base font-medium mb-6 text-[#838383] md:w-[500px]">
            You can trust the platform
          </p>
          <h1 className="text-white w-auto text-4xl font-bold leading-tight md:text-4xl md:leading-tight">
            <span className="text-primary"> Efficient and Transparent</span>
            <br /> Processes
          </h1>
          <p className="mt-8 text-base font-medium leading-loose text-[#838383] md:w-[500px]">
            As Anambra State moves towards meeting the needs of a smart mega
            city, AIRS continues to position itself as the major funding arm of
            the state government by putting in place structures that will ensure
            collection of the proper amount of tax revenue at the least cost.
          </p>
          
        </div>
      </Container>
      <div className=" top-0 right-0 bottom-0 mt-12 md:mt-0 md:absolute md:w-[700px]  md:pt-0">
        <img
          src="/img/Rectangle.png"
          alt="about Image"
          className="z-0  h-auto w-full object-cover md:h-[700px] md:w-full lg:w-full"
        />
      </div>
    </div>
  );
}

export default EffTrans;
