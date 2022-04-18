import { useRouter } from "next/router";
import { QueryClientProvider } from "react-query";
import AdminLayout from "../components/AdminLayout";
import { queryClient } from "../request/queryClient";
import "../styles/globals.css";
 import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }) {
  const appRoute = useRouter();
  const { route } = appRoute;
  const getLayout = Component.getLayout ?? ((page) => page);
  const render = Component.useLoader ?? true;
  if (route.startsWith("/dashboard")) {
    // check if route starts with dashboard and render the dashboardd layuout
    return (
      <QueryClientProvider client={queryClient}>
        <AdminLayout>{getLayout(<Component {...pageProps} />)}</AdminLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    )
}
      
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
