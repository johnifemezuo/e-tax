import Head from 'next/head';
import React from 'react'
import ButtonInfo from '../../components/Dashboard/UI/Button/ButtonInfo';
import AddUserIcon from '../../components/E-tax/Icon/svg/AddUserIcon';
import LayerIcon from '../../components/E-tax/Icon/svg/LayerIcon';
import Container from '../../layout/Container';

function OnlineRegIndex() {
  return (
    <>
      <Head>
        <title>Welcome To Registration</title>
      </Head>
      <div className="mb-[300px] md:mb-0">
        <div className="relative h-screen md:h-[750px]">
          <div className="">
            <img
              src="/img/image 15.png"
              className=" mx-auto h-auto w-[900px] pt-36 md:h-[600px] md:w-[900px] md:pt-0"
              alt=""
            />
          </div>

          <div className=" Transparent absolute top-0 left-0 h-screen w-full bg-[#f7f7f7e0] pb-12 pt-20 md:h-full md:pt-36">
            <Container>
              <h1 className=" text-primary relative w-auto text-4xl font-bold leading-tight md:w-[600px] md:text-5xl ">
                Welcome to registration
              </h1>
              <p className="leading-tighter mt-12 text-base font-medium text-[#3B3B3B] md:w-[600px] md:text-lg">
                Submit your personal details for the Anambra State Tax
                registration process. Filling out the Online form is the first
                step in the process of registration. You will still need to
                complete your registration at an enrolment station where we will
                capture your biometric information.
              </p>
              <div className="space-y-8 py-12 align-bottom md:mt-16 md:flex md:space-x-12 md:space-y-0">
                <div>
                  <h1 className="text-primaryDark font-semibold uppercase">
                    Search for areas in you zone
                  </h1>
                  <ButtonInfo
                    customStyle={`bg-primary text-white mt-6 hover:bg-neutral-200`}
                  >
                    Pay Tax Now
                  </ButtonInfo>
                </div>
                <div className="bg-primaryDark flex space-x-5 p-12 md:w-[410px]">
                  <AddUserIcon />
                  <div className="space-y-4">
                    <p className="text-[#929292]">
                      Follow our online Registration processes by clicking on
                      the button bellow
                    </p>
                    <ButtonInfo
                      classNam={`text-white bg-green hover:bg-neutral-700`}
                    >
                      Register Now
                    </ButtonInfo>
                  </div>
                </div>
              </div>
            </Container>

            <img
              src="/img/reg.png"
              alt="about Image"
              className="relative  right-0 top-0 z-0 h-auto w-full object-cover md:absolute md:h-full md:w-[500px] lg:w-[500px] "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineRegIndex