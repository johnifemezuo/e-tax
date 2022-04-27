import React from "react";
import Container from "../../../layout/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import Router, { withRouter } from "next/router";
import ButtonInfo from "../../Dashboard/UI/Button/ButtonInfo";

function Hero() {
  const router = useRouter();
  return (
    <div className="relative h-screen md:h-[750px]">
      <div className="">
        <img
          src="/img/image 15.png"
          className=" mx-auto h-auto w-[900px] pt-36 md:h-[600px] md:w-[900px] md:pt-0"
          alt=""
        />
      </div>

      <div className=" bg-primaryTransparent absolute top-0 left-0 h-screen w-full pb-12 pt-20 md:h-full md:pt-36">
        <Container>
          <h1 className=" text-primaryDark relative w-auto text-5xl font-bold leading-tight md:w-[700px] md:text-6xl ">
            Pay Your <span className=" text-teal">tax</span> and Lets grow
            together
          </h1>
          <p className="leading-tighter mt-12 text-xl font-medium md:w-[600px]">
            Grow with us as you register and pay your tax with our online
            platefor you users who wants to join or pay at their own
            convenience.
          </p>
          <div className="flex space-x-8 py-12">
            <Link href={`/findUnion`}>
              <a>
                <ButtonInfo
                  className={`text-primaryDark bg-white hover:bg-neutral-200`}
                >
                  Pay Tax Now
                </ButtonInfo>
              </a>
            </Link>
            <Link href={`/auth/register`}>
              <a>
                <ButtonInfo
                  className={`bg-primaryDark text-white hover:bg-neutral-700`}
                >
                  Register Now
                </ButtonInfo>
              </a>
            </Link>
          </div>
        </Container>

        <img
          src="/img/image 16.png"
          alt="about Image"
          className="relative  right-0 top-0 z-0 h-auto w-full object-cover md:absolute md:h-full md:w-[500px] lg:w-[600px] "
        />
      </div>
    </div>
  );
}

export default Hero;
