import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import Head from "next/head";
import Layout from "components/Layout/layout";
import usePageView from "hooks/usePageView";
import { RecoilRoot } from "recoil";
import DarkState from "components/Sys/DarkState";
// const canUseDOM = typeof window !== "undefined";
// const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RecoilRoot>
        <DarkState>
          <Layout>
            <AnimatePresence exitBeforeEnter initial={true}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Layout>
        </DarkState>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
