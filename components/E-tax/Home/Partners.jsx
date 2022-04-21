import React from "react";
import Container from "../../../layout/Container";

function Partners() {
  return (
    <div className="bg-[#F2F2F2] py-20">
      <Container>
        <div className="text-center reveal">
          <h1 className="text-primaryDark w-auto text-4xl font-bold leading-tight md:text-4xl md:leading-tight">
            <span className="text-primary"> Our Partners </span>
          </h1>
          <p className="text-textColor mt-8 text-base ">
            Getting information for filing your taxes just got easier
          </p>

          <div className="mx-auto mt-12 flex items-center  justify-between md:w-[500px]">
            <img src="/img/logo-an 2.png" className="w-14 md:w-16" alt="anambra logo" />
            <img src="/img/image 3.png" className="w-14 md:w-24" alt="anambra logo" />
            <img src="/img/image 4.png" className="w-14 md:w-16" alt="anambra logo" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Partners;
