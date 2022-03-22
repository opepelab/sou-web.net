import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";
import Script from "next/script";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  useLayoutEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  });
  usePageView();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Script src="/localstorage.js" strategy="beforeInteractive" />
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default MyApp;
