import Layout from '../components/layout'
import { AnimatePresence } from "framer-motion";
import '../styles/globals.css'
import '../styles/mobile.css'

type AppProps = {
  Component: React.FC;
  pageProps: string;
  router: any;
}


const MyApp: React.FC<AppProps> = ({ Component, pageProps, router } ): JSX.Element => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
