import AboutSection from "../components/E-tax/Home/AboutSection";
import Head from "next/head";
import EffTrans from "../components/E-tax/Home/EffTrans";
import Hero from "../components/E-tax/Home/Hero";
import Partners from "../components/E-tax/Home/Partners";
import RegistereeBus from "../components/E-tax/Home/RegistereeBus";
import RegistOption from "../components/E-tax/Home/RegistOption";
import ReviewSec from "../components/E-tax/Home/ReviewSec";
import Services from "../components/E-tax/Home/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Tax System</title>
      </Head>
      <Hero />
      <AboutSection />
      <Services />
      <Partners />
      <EffTrans />
      <RegistOption />
      <ReviewSec />
      <RegistereeBus/>
    </>
  );
}
