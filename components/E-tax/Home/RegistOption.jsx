import Link from 'next/link';
import React from 'react'
import Container from '../../../layout/Container'
import ButtonInfo from '../../Dashboard/UI/Button/ButtonInfo';

function RegistOption() {
  return (
    <div className="my-20">
      <Container>
        <div className="reveal relative pt-20  text-center md:mt-36  md:py-0">
          <p className="] mb-6 text-base font-medium text-[#838383]">
            How we mad it easy
          </p>
          <h1 className="w-auto text-4xl font-bold leading-tight text-white md:text-4xl md:leading-tight">
            <span className="text-primary"> Efficient and Transparent</span>
            <br /> Processes
          </h1>
          <p className="mx-auto text-base font-medium leading-loose text-[#838383] md:w-[700px] ">
            As Anambra State moves towards meeting the needs of a smart mega
            city, AIRS continues to position itself as the major funding arm of
            the state government by putting in place structures that will ensure
            collection of the proper amount of tax revenue at the least cost.
          </p>
          <ButtonInfo
            customStyle={`text-white mx-auto mt-12 bg-teal hover:bg-neutral-700`}
          >
            Register Now
          </ButtonInfo>
        </div>

        <div className="reveal mt-20 grid gap-12 md:grid-cols-2">
          <div className="relative md:w-[500px]">
            <img src="/img/image 16.png" alt="" />
            <div className="absolute bottom-0 right-0 left-0 bg-[#02020285] p-6">
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Register From Union
              </h2>
              <ButtonInfo
                className={`text-primaryDark mt-4 bg-white hover:bg-neutral-200`}
              >
                Register Now
              </ButtonInfo>
            </div>
          </div>
          <div className="relative md:w-[500px]">
            <img src="/img/unsplash_2m71l9fA6mg.png" alt="" />
            <div className="absolute bottom-0 right-0 left-0 bg-[#02020285] p-6">
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Register online
              </h2>
              <Link href={`/onlineReg`}>
                <a>
                  <ButtonInfo
                    className={`text-primaryDark mt-4 bg-white hover:bg-neutral-200`}
                  >
                    Register Now
                  </ButtonInfo>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RegistOption