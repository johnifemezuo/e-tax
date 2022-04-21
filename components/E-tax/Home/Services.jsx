import React from "react";
import Container from "../../../layout/Container";
import Button from "../../Dashboard/UI/Button/Button";
import BriefcaseIcon from "../Icon/svg/BriefcaseIcon";
import HouseIcon from "../Icon/svg/HouseIcon";
import LayerIcon from "../Icon/svg/LayerIcon";
import RightIcon from "../Icon/svg/RightIcon";

function Services() {
  return (
    <div className="my-12 md:my-36">
      <Container>
        <div className="reveal">
          <h1 className="text-primaryDark w-auto text-right text-3xl font-bold leading-tight md:text-4xl md:leading-tight">
            <span className="text-primary"> Services that makes the</span>
            <br /> process easier
          </h1>
          <p className="text-textColor mt-8 text-right text-base font-medium leading-loose">
            Getting information for filing your taxes just got easier
          </p>
        </div>

        {/* ------------------card Items------------------- */}
        <div className="w-full snap-x snap-mandatory reveal overflow-x-auto">
          <div className="mt-12 grid w-[950px] grid-cols-3 gap-8 md:w-full ">
            <div className="bg-teal min-h-[500px] snap-center space-y-8 px-8 py-16 ">
              <LayerIcon />
              <h2 className="text-3xl font-semibold text-white ">Tax Types</h2>
              <p className=" mt-8 text-base leading-loose text-white">
                There are many types of taxes out there, from income taxes to
                property taxes and capital gains taxes.
              </p>
              <Button customStyle="flex hover:bg-white hover:text-primaryDark group text-white btn-rounded-full-border space-x-2">
                <span>Learn More</span>
                <RightIcon />
              </Button>
            </div>
            <div className="bg-teal min-h-[500px] snap-center space-y-8 px-8 py-16 ">
              <BriefcaseIcon />
              <h2 className="text-3xl font-semibold text-white ">Tax System</h2>
              <p className=" mt-8 text-base leading-loose text-white">
                There are three main types of Tax Systems: Progressive,
                Proportional & Regressive e.tc....
              </p>
              <Button customStyle="flex hover:bg-white hover:text-primaryDark group text-white btn-rounded-full-border space-x-2">
                <span>Learn More</span>
                <RightIcon />
              </Button>
            </div>
            <div className="bg-teal min-h-[500px] snap-center space-y-8 px-8 py-16 ">
              <HouseIcon />
              <h2 className="text-3xl font-semibold text-white ">
                Tax Collection
              </h2>
              <p className=" mt-8 text-base leading-loose text-white">
                Tax Collection is the implementation of the measures (Tax
                Policies and Tax Laws) put in place by …….
              </p>
              <Button customStyle="flex hover:bg-white hover:text-primaryDark group text-white btn-rounded-full-border space-x-2">
                <span>Learn More</span>
                <RightIcon />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
