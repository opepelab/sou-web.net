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
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  const [theme, toggleTheme] = useState("");
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://sou-web.net/ogp/sou-ogp.png" />
        <meta name="twitter:image" content="https://sou-web.net/ogp/sou-ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme === "dark" ? LightTheme : DarkTheme}>
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
