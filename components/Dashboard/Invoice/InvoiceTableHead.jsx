import React from "react";

function InvoiceTableHead() {
  return (
    <>
      <thead className=" bg-gray-100">
        <tr className="w-full text-left uppercase text-gray-500">
          <th className="py-4 first:px-4 last:pr-4">
            <input type="checkbox" />
          </th>
          <th>Id</th>
          <th>Product Name</th>
          <th>Images</th>
          <th>description</th>
          <th>Category</th>
          <th>Gender</th>
          <th>sizes</th>
          <th>date</th>
          <th className="pr-4">actions</th>
        </tr>
      </thead>
    </>
  );
}

export default InvoiceTableHead;
