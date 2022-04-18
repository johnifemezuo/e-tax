import React from "react";
import Container from "../../layout/Container";
import InvoiceTableRow from "../Invoice/InvoiceTableRow";
import InvoiceTableHead from "../Invoice/InvoiceTableHead";
import SearchAndFilter from "../UI/SearchAndFilter/SearchAndFilter";
import HeaderXl from "../Element/HeaderXl";
import InputSelect from "../Forms/InputSelect"
import DashboardListProduct from "../ListItems/DashboardListProduct";
import Label from "../Element/Label";

function CategoryList() {
  return (
    <div className="mt-28">
      <Container>
        {/* The header Section */}
        <HeaderXl>Categories</HeaderXl>
        <div className="mt-24 fle w-full">
          <Label>Select Categories Here</Label>
          <InputSelect/>
        </div>
        {/* <div className="w-full border p-4">
          <div className="flex gap-x-1 space-x-2">
            <h3 className="text-2xl font-bold">Invoices</h3>
            <p className="tex-gray-500 flex rounded-full bg-gray-200 px-2.5 py-1.5">
              67
            </p>
          </div>
        </div> */}

        {/* The table section */}
        {/* <table className="w-full table-auto">
          <InvoiceTableHead />
          <InvoiceTableRow />
          <InvoiceTableRow />
          <InvoiceTableRow />
          <InvoiceTableRow />
          <InvoiceTableRow />
          <InvoiceTableRow />
          <InvoiceTableRow />
        </table> */}
        <DashboardListProduct/>
      </Container>
    </div>
  );
}

export default CategoryList;
