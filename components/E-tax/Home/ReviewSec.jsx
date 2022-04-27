import React from 'react'
import Container from '../../../layout/Container';

function ReviewSec() {
  return (
    <div className="my-20">
      <img
        src="/img/Rectangle 52.png"
        className="object-cover md:h-[500px] md:w-full"
        alt=""
      />
      <Container>
        <div className="bg-primaryDark reveal relative -mt-20 flex space-x-4 p-6 md:max-w-xl md:p-12">
          <span className="text-primary text-6xl">"</span>
          <div className="">
            <h2 className="text-base  font-semibold text-white md:text-xl">
              They are just a great group of people and are as invested in the
              company as nayone is.{" "}
            </h2>
            <p className="mt-4 text-sm text-[#757575] md:text-base">
              Ibeto Cement Company, Abuja
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ReviewSec