import React from "react";
import Container from "../../../layout/Container";
import Input from "../../Dashboard/Forms/Input/Input";
import ButtonInfo from "../../Dashboard/UI/Button/ButtonInfo";

function RegisterIndex() {
  return (
    <div className="relative mb-[900px] md:mb-[520px] h-auto md:h-auto">
      <div className="">
        <img
          src="/img/image 15.png"
          className=" mx-auto h-auto w-full pt-36 md:h-auto md:w-[900px] md:mt-0"
          alt=""
        />
      </div>

      <div className=" absolute top-0 left-0 w-full bg-[#f7f7f7e0] pb-12 pt-20 h-auto md:h-auto md:pt-36">
        <Container>
          <div className="relative mb-12">
            <h1 className=" text-primary relative w-auto text-3xl font-bold leading-tight md:w-[700px] md:text-6xl ">
              Find Unions in your area
            </h1>
            <p className="leading-tighter mt-12 text-xl font-medium md:w-[600px]">
              Input you information partaining you area to help you find them.
            </p>
          </div>
        </Container>

        <div className="relative  mb-[80px] h-full w-full  pt-20 md:h-full md:pt-8">
          <Container>
            <div className=" max-w-[500px] bg-white p-12">
              <form action="" className="mt-8 space-y-6">
                <div>
                  <Input
                    placeholder="Ebeto Business Name"
                    inputLabel="Business Name"
                  />
                </div>
                <div>
                  <Input placeholder="Ekwulobia" inputLabel="Town" />
                </div>
                <div>
                  <Input placeholder="Anambra" inputLabel="State" />
                </div>
                <div>
                  <Input placeholder="Orumba South" inputLabel="L.G.A" />
                </div>
                <ButtonInfo className="w-full bg-green text-center text-white">
                  Search now
                </ButtonInfo>
              </form>
            </div>
          </Container>

          <div className="">
            <img
              src="/img/map.png"
              alt="about Image"
              className="relative  right-0 top-0 z-0 h-[300px]  w-full object-cover md:absolute md:h-full md:w-[500px] lg:w-[600px] "
            />

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterIndex;

//           <div className="mx-auto max-w-[500px] bg-white p-12">
//             <h1 className="text-center text-3xl font-bold uppercase">
//               REGISTER
//             </h1>
//             <form action="" className="mt-8 space-y-6">
//               <div>
//                 <Input placeholder="example@gmail.com" inputLabel="Email" />
//               </div>
//               <div>
//                 <Input placeholder="**********" inputLabel="Password" />
//               </div>
//               <div>
//                 <Input placeholder="**********" inputLabel="Verify Password" />
//               </div>
//               <Button customStyle="w-full bg-green text-center text-white">
//                 REGISTER
//               </Button>
//               <Link href={`/auth/login`}>
//                 <a>
//                   <Button customStyle="w-full bg-transparent text-green text-white hover:bg-gray-100">
//                     SIGN IN
//                   </Button>
//                 </a>
//               </Link>

//               <div className="mx-auto flex w-full justify-between md:w-[350px]">
//                 <div
//                   className=" flex max-w-[130px] items-center justify-between space-x-4 bg-[#F9FBF4] p-4
// text-[#B0B0B0]"
//                 >
//                   <img src="/img/google.png" alt="" />
//                   <span>Google</span>
//                 </div>

//                 <div
//                   className=" flex max-w-[150px] items-center justify-between space-x-4 bg-[#F9FBF4] p-4
// text-[#B0B0B0]"
//                 >
//                   <img src="/img/facebook.png" alt="" />
//                   <span>Facebook</span>
//                 </div>
//               </div>
//             </form>
//           </div>