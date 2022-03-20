import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import { ThemeContext, ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "components/Theme/Theme";
import { useState, useEffect } from "react";
import GlobalStyles from "components/Theme/Globalstyles";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();
  const [currentTheme, toggleTheme] = useState();
  // const [currentTheme, setCurrentTheme] = useState(() => {
  //   localStorage.setItem("theme", currentTheme);
  //   (localStorage && localStorage.theme === "dark") ||
  //     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  //   const storagedTheme = localStorage.getItem("theme");

  //   return storagedTheme ?? "light";
  // });

  // useEffect(() => {
  //   localStorage.setItem("theme", currentTheme);
  // }, [currentTheme]);

  // function toggleTheme() {
  //   setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  // }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <ThemeProvider theme={currentTheme === "dark" ? LightTheme : DarkTheme}>
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
