import React from "react";
import Input from "../../../components/Dashboard/Forms/Input/Input";
import ButtonSucess from "../../../components/Dashboard/UI/Button/ButtonSucess";
import BusinessInformation from "../../../components/Register/BusinessInformation/BusinessInformation";
import ContactInformation from "../../../components/Register/ContactInformation/ContactInformation";
import PersonalInfomation from "../../../components/Register/PersonalInfomation/PersonalInfomation";

function SubmitPage() {
  return (
    <div>
      <div className="bg-darkYellow">
        <div className="m-auto w-full max-w-6xl py-2 px-3 md:p-0">
          <div className="py-12">
            <h1 className="text-2xl font-bold text-[#151515]">SUBMIT</h1>
            <p className=" w-full max-w-md  py-2 text-sm text-[#151515]">
              Please review or input information to check if you have to mend it
              or correct anything.
            </p>
          </div>
        </div>
      </div>

      {/*===========  step on how to register ============= */}

      <section className="relative m-auto w-full max-w-6xl">
        <div className="absolute -top-5 w-full">
          <div className="bg-whiteColor mx-2  p-2 shadow-md md:mx-0">
            <section className="flex px-2 sm:px-7 ">
              <div className="flex w-full items-center gap-2 text-xs sm:px-2">
                <div>
                  <h4 className="text-whiteColor  flex h-6 w-6 items-center justify-center rounded-full bg-[#C8BBA6] font-semibold">
                    2
                  </h4>
                </div>
                <p className="text-[#C1C1C1] sm:mx-5">Register</p>
                <div className="hidden w-[100%] border-b border-dashed border-[#C1C1C1] sm:block" />
              </div>

              <div className="flex w-full items-center gap-2 text-xs sm:px-2">
                <div>
                  <h4 className="text-whiteColor  flex h-6 w-6 items-center justify-center rounded-full bg-[#C8BBA6] font-semibold">
                    1
                  </h4>
                </div>
                <p className="text-[#C1C1C1] sm:mx-5">Review</p>
                <div className="hidden w-[100%] border-b border-dashed border-[#C1C1C1] sm:block" />
              </div>

              <div className="flex  items-center gap-2 text-xs">
                <h4 className="text-whiteColor bg-greenColor flex h-6 w-6 items-center justify-center rounded-full   font-semibold">
                  3
                </h4>
                <p className="text-greenColor">Submit</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className=" h-[81vh] bg-[#FBF6EE] py-10">
        <div className="bg-whiteColor m-auto  w-[95%] max-w-3xl p-5 shadow   sm:p-10">
          <div>
            <h2 className="text-xl font-semibold text-black">
              SUBMIT YOUR INFORMATION
            </h2>
            <p className="py-5 text-sm text-[#656262] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              et convallis viverra facilisis tellus mauris tincidunt.
              Pellentesque imperdiet adipiscing habitant fringilla morbi. Tellus
              sit magna turpis massa lacus tristique amet. Risus proin nisi,
              risus elit aliquam tincidunt arcu in volutpat.
            </p>

            <div className="flex items-center ">
              <div className=" w-[9%] sm:w-[5%]">
                <Input className="w-full" inputConfig={{ type: "checkbox" }} />
              </div>
              <p className="w-full text-sm text-[#656262]">
                Do you agree to our terms and condition ?
              </p>
            </div>

            <div className="flex justify-center pt-10">
              <ButtonSucess className="bg-[#5DC522] text-xs">
                SUBMIT
              </ButtonSucess>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubmitPage;
