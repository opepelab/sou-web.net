import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useEffect, useState } from "react";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";
import Chakra from "components/Sys/chakra";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  // useLayoutEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.querySelector("html")?.classList.add("dark");
  //   } else {
  //     document.querySelector("html")?.classList.remove("dark");
  //   }
  // }, []);

  useEffect(() => {
    setMounted(true);
  }, []);
  usePageView();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Chakra cookies={pageProps.cookies}>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            {mounted && <Component {...pageProps} key={router.asPath} />}
          </AnimatePresence>
        </Layout>
      </Chakra>
    </>
  );
};

export default MyApp;
