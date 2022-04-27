import React from 'react';
import Head from "next/head";
import LoginIndex from '../../../components/E-tax/Login/LoginIndex';

function LoginPage() {
  return (
    <>
        <Head>
          <title>E-Tax System</title>
      </Head>
      <LoginIndex/>
    </>
  );
}

export default LoginPage;
