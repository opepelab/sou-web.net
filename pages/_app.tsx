import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";
import LayoutProvider from "components/Layout/layout";
import usePageView from "hooks/usePageView";
import { RecoilRoot } from "recoil";
import DarkState from "components/Sys/DarkState";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();
  return (
    <>
      <RecoilRoot>
        <DarkState>
          <LayoutProvider>
            <AnimatePresence exitBeforeEnter initial={true}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </LayoutProvider>
        </DarkState>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
