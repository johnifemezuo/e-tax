import Link from "next/link";
import React from "react";
import Container from "../../../layout/Container";
import Input from "../../Dashboard/Forms/Input/Input";
import Button from "../../Dashboard/UI/Button/Button";

function RegisterIndex() {
  return (
    <div className="relative h-screen md:h-[900px]">
      <div className="">
        <img
          src="/img/image 15.png"
          className=" mx-auto h-auto w-[900px] pt-36 md:h-[600px] md:w-[900px] md:pt-0"
          alt=""
        />
      </div>

      <div className=" bg-primaryTransparent absolute top-0 left-0 h-full w-full pb-12 pt-20 md:h-full md:pt-36">
        <Container>
          <div className="mx-auto max-w-[500px] bg-white p-12">
            <h1 className="text-center text-3xl font-bold uppercase">
              REGISTER
            </h1>
            <form action="" className="mt-8 space-y-6">
              <div>
                <Input placeholder="example@gmail.com" inputLabel="Email" />
              </div>
              <div>
                <Input placeholder="**********" inputLabel="Password" />
              </div>
              <div>
                <Input placeholder="**********" inputLabel="Verify Password" />
              </div>
              <Button customStyle="w-full bg-green text-center text-white">
                REGISTER
              </Button>
              <Link href={`/auth/login`}>
                <a>
                  <Button customStyle="w-full bg-transparent text-green text-white hover:bg-gray-100">
                    SIGN IN
                  </Button>
                </a>
              </Link>

              <div className="mx-auto flex w-full justify-between md:w-[350px]">
                <div
                  className=" flex max-w-[130px] items-center justify-between space-x-4 bg-[#F9FBF4] p-4
text-[#B0B0B0]"
                >
                  <img src="/img/google.png" alt="" />
                  <span>Google</span>
                </div>

                <div
                  className=" flex max-w-[150px] items-center justify-between space-x-4 bg-[#F9FBF4] p-4
text-[#B0B0B0]"
                >
                  <img src="/img/facebook.png" alt="" />
                  <span>Facebook</span>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default RegisterIndex;
