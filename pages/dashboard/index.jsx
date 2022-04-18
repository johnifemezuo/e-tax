import Head from 'next/head';
import React from 'react'
import Dashboard from '../../components/modules/Dashboard';

function index() {
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Dashboard/>
      </>
    );
}

export default index