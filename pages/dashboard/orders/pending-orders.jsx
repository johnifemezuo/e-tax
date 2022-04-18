import Link from "next/link";
import React from "react";
import OrdersLayout from "../../../layout/OrdersLayout";

function PendingOrders() {
  return (
    <div>
      Pending Orders
      <Link href={"/dashboard/orders"}>
        <a href="">Next</a>
      </Link>
    </div>
  );
}

PendingOrders.getLayout = (children) => <OrdersLayout>{children}</OrdersLayout>;

export default PendingOrders;
