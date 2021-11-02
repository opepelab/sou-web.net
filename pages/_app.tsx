import { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import '../styles/globals.scss'
import '../styles/mobile.scss'
import '../styles/img.scss'
import Head from 'next/head'


const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
