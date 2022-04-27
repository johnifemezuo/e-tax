import { QueryClientProvider } from "react-query";
import Layout from "../layout/Layout";
import { queryClient } from "../request/queryClient";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
  }, []);


  return (
    <Layout>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
