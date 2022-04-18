import Link from "next/link";
import React, { useEffect, useState } from "react";
import OrdersLayout from "../../../layout/OrdersLayout";
import { useFetcher } from "../../../request/useFetcher";

function OrdersPage() {
  const {
    get: { data, setQueryCache },
  } = useFetcher({
    links: {
      get: "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
    },
    refetchCaches: [],
    load: false,
    refetchOnGet: true,
  });

  return (
    <div>
      Page content
      <Link href={"/dashboard/orders/pending-orders"}>
        <a href="">Next</a>
      </Link>
    </div>
  );
}

OrdersPage.getLayout = (children) => <OrdersLayout>{children}</OrdersLayout>;
OrdersPage.useLoader = async () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 4000);
  }, []);
  return render;
};

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default React.memo(OrdersPage);
