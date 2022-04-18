import React from "react";
import InvoiceTableHead from "../../components/Dashboard/Invoice/InvoiceTableHead";
import InvoiceTableRow from "../../components/Dashboard/Invoice/InvoiceTableRow";

function ProductListed() {
  return (
    <div className="">
      {/* The header Section */}
      {/* <div className="w-full border p-4">
          <div className="flex gap-x-1 space-x-2">
            <h3 className="text-2xl font-bold">Invoices</h3>
            <p className="tex-gray-500 flex rounded-full bg-gray-200 px-2.5 py-1.5">
              67
            </p>
          </div>
        </div> */}

      {/* The table section */}
      <table className="w-full table-auto">
        <InvoiceTableHead />
        <InvoiceTableRow />
        <InvoiceTableRow />
      </table>
    </div>
  );
}

export default ProductListed;
