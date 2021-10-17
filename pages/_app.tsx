import {AppProps} from 'next/app'
import Layout from '../components/layout'
import { AnimatePresence } from "framer-motion";
import '../styles/globals.css'
import '../styles/mobile.css'


const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
