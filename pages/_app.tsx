import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import "../styles/mobile.scss";
import "../styles/img.scss";
import Head from "next/head";
import { ThemeContext, ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../components/Theme/Theme";
import { useState } from "react";
import GlobalStyles from "../components/Theme/Globalstyles";
import Layout from "../components/Layout/layout";
import { GA_TRACKING_ID, pageview } from "../libs/gtag";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const [theme, toggleTheme] = useState("");
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
          <GlobalStyles />
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default MyApp;
