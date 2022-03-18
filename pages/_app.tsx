import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import { ThemeContext, ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "components/Theme/Theme";
import { useState } from "react";
import GlobalStyles from "components/Theme/Globalstyles";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();
  const [theme, toggleTheme] = useState("");
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
