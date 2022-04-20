import { QueryClientProvider } from "react-query";
import Layout from "../layout/Layout";
import { queryClient } from "../request/queryClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
