import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "libs/Chakra";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";
import atom from "libs/theme2";
import { RecoilRoot } from "recoil";
import Theme from "libs/TB";
// const canUseDOM = typeof window !== "undefined";
// const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  // useIsomorphicLayoutEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("chakra-ui-color-mode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   } else {
  //     document.documentElement.setAttribute("data-theme", "light");
  //   }
  // }, []);

  usePageView();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RecoilRoot>
        <Theme>
          <ChakraProvider resetCSS={false} theme={theme}>
            <Layout>
              <AnimatePresence exitBeforeEnter initial={true}>
                <Component {...pageProps} key={router.asPath} />
              </AnimatePresence>
            </Layout>
          </ChakraProvider>
        </Theme>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
