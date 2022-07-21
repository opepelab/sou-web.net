import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import DarkState from 'components/Sys/DarkState';
// import { ThemeProvider } from 'components/Sys/Test';
import Layout from 'components/Layout/layout';
import { AnimatePresence } from 'framer-motion';
import usePageView from 'hooks/usePageView';
import 'styles/globals.scss';
import 'styles/mobile.scss';
import 'styles/icons.scss';
import 'styles/img.scss';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  usePageView();
  return (
    <RecoilRoot>
      <DarkState>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </DarkState>
    </RecoilRoot>
  );
};

export default MyApp;
