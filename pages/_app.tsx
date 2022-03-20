import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "libs/theme";
import { ThemeContext, ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "components/Theme/Theme";
import { useState } from "react";
import GlobalStyles from "components/Theme/Globalstyles";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();
  // const [currentTheme, toggleTheme] = useState();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <ThemeProvider theme={currentTheme === "dark" ? LightTheme : DarkTheme}> */}
      {/* <GlobalStyles /> */}
      <ChakraProvider theme={theme} resetCSS={false}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
      {/* </ThemeProvider>
      </ThemeContext.Provider> */}
    </>
  );
};

export default MyApp;
