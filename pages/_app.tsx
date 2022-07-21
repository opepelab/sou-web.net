import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import DarkState from 'components/Sys/DarkState';
import { ChakraProvider } from '@chakra-ui/react';
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
        <ChakraProvider resetCSS={false}>
          <Layout>
            <AnimatePresence exitBeforeEnter initial={false}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Layout>
        </ChakraProvider>
      </DarkState>
    </RecoilRoot>
  );
};

export default MyApp;
