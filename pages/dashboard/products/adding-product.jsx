import Head from "next/head";
import React from "react";
import AddProduct from "../../../components/modules/AddProduct";

function AddProductPage() {
  return (
    <div>
      <Head>
        <title>Add Product</title>
      </Head>
      <AddProduct />
    </div>
  );
}

AddProductPage.getPageLayout = ({ children }) => (
  <div className="bg-green-300">{children}</div>
);

export default AddProductPage;
