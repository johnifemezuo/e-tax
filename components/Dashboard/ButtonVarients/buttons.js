import React from "react";
import ButtonDanger from "../../components/Dashboard/AdminLayouts/Button/ButtonDanger";
import ButtonInfo from "../../components/Dashboard/AdminLayouts/Button/ButtonInfo";
import ButtonSucess from "../../components/Dashboard/AdminLayouts/Button/ButtonSucess";
import ButtonWarning from "../../components/Dashboard/AdminLayouts/Button/ButtonWarning";


function buttons() {
  return (
    <div>
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div>
          <div>
            <ButtonInfo className="px-5" isloading="true">
              Button Info
            </ButtonInfo>
          </div>

          <div className=" my-2">
            <ButtonInfo className="px-5" disabled={true} isloading="true">
              Button Info
            </ButtonInfo>
          </div>
        </div>
        <div>
          <ButtonWarning className="px-5" isloading="true">
            Button Warning
          </ButtonWarning>

          <div className=" my-2">
            <ButtonWarning className="px-5" disabled={true} isloading="true">
              Button Warning
            </ButtonWarning>
          </div>
        </div>
        <div>
          <ButtonDanger customStyle="px-5" isloading="true">
            Button Danger
          </ButtonDanger>

          <div className=" my-2">
            <ButtonDanger customStyle="px-5" disabled={true} isloading="true">
              Button Danger
            </ButtonDanger>
          </div>
        </div>
        <div>
          <ButtonSucess className="px-5" isloading="true">
            Button Success
          </ButtonSucess>

          <div className=" my-2">
            <ButtonSucess className="px-5" disabled={true} isloading="true">
              Button Success
            </ButtonSucess>
          </div>
        </div>
      </section>
    </div>
  );
}



export default buttons;
