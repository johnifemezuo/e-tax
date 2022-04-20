import React from 'react'
import Container from '../../../layout/Container'
import Button from '../../Dashboard/UI/Button/Button';

function Hero() {
  return (
    <div className="relative h-[800px] md:h-full">
      <div className='md:w-[600px]'>
        <img
          src="/img/image 15.png"
          className=" mx-auto h-auto w-[900px] pt-36 md:h-[500px] md:w-[800px] md:pt-0"
          alt=""
        />
      </div>
      <div className="bg-primaryTransparent absolute top-0 left-0 h-[600px] w-full pb-12 pt-20 md:h-full">
        <Container>
          <h1 className="text-primaryDark w-auto text-5xl font-bold leading-tight md:w-[700px] md:text-6xl ">
            Pay Your <span className=" text-teal">tax</span> and Lets grow
            together
          </h1>
          <p className="leading-tighter mt-12 text-xl font-medium md:w-[800px]">
            Grow with us as you register and pay your tax with our online
            platefor you users who wants to join or pay at their own
            convenience.
          </p>
          <div className="flex space-x-8 py-12">
            <Button
              customStyle={`bg-white text-primaryDark hover:bg-neutral-200`}
            >
              Pay Tax Now
            </Button>
            <Button
              customStyle={`text-white bg-primaryDark hover:bg-neutral-700`}
            >
              Register Now
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Hero