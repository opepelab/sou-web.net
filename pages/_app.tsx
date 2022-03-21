import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Chakra from "components/Sys/chakra";
import { NextApiResponse } from "next";
import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";

const MyApp = ({ Component, pageProps, router, cookies }: any | AppProps): JSX.Element => {
  usePageView();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider
        colorModeManager={typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager}
      >
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
};
MyApp.getInitialProps = ({ req }: NextApiResponse) => {
  return {
    // first time users will not have any cookies and you may not return
    // undefined here, hence ?? is necessary
    cookies: req.headers.cookie ?? "",
  };
};

export default MyApp;
