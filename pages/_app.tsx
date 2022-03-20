import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Chakra from "components/Sys/chakra";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
// import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "libs/theme";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  // usePageView();
  // const [currentTheme, toggleTheme] = useState();

  return (
    <>
      <Chakra cookies={pageProps.cookies}>
        {/* <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head> */}

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
