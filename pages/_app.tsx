import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Chakra from "components/Sys/chakra";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";
import Script from "next/script";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="/theme.js" strategy="beforeInteractive" />
      <Chakra cookies={pageProps.cookies}>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </>
  );
};

export default MyApp;
export { getServerSideProps } from "components/Sys/chakra";
