import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
// import { Provider } from "react-redux";
// import { store } from "redux/store";
import DarkState from "components/Sys/DarkState";
import LayoutProvider from "components/Layout/layout";
import { AnimatePresence } from "framer-motion";
import usePageView from "hooks/usePageView";
import "styles/globals.scss";
import "styles/mobile.scss";
import "styles/icons.scss";
import "styles/img.scss";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();
  return (
    <>
      {/* <Provider store={store}> */}
      <RecoilRoot>
        <DarkState>
          <LayoutProvider>
            <AnimatePresence exitBeforeEnter initial={true}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </LayoutProvider>
        </DarkState>
      </RecoilRoot>
      {/* </Provider> */}
    </>
  );
};

export default MyApp;
