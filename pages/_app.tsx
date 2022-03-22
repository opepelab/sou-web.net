import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";
import Script from "next/script";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
    } else {
      setDarkMode(false);
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);
  usePageView();

  return (
    <>
      <Script src="/localstorage.js" strategy="beforeInteractive" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default MyApp;
