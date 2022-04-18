import Head from "next/head";
import React from "react";
import WelcomModal from "../../components/WelcomModal/WelcomModal";

function index() {
  return (
    <>
      <Head>
        <title>Welcome Creatovis</title>
      </Head>
        <WelcomModal />
    </>
  );
}

export default index;
