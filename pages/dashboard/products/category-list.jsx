import Head from "next/head";
import React from "react";
import CategoryList from "../../../components/modules/CategoryList";

function categoryListIndex() {
  return (

    <>
      <Head>
        <tile>Category Lists</tile>
      </Head>
      <CategoryList />
    </>
  );
}

export default categoryListIndex;
