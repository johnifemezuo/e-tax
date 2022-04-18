import React from "react";
import OrdersSidebar from "../components/Orders/OrdersSidebar";

function OrdersLayout({ children }) {
  return (
    <div className="flex flex-row">
      <OrdersSidebar />
      {children}
    </div>
  );
}

export default React.memo(OrdersLayout);
