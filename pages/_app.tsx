import {AppProps} from 'next/app'
import { AnimatePresence } from "framer-motion";
import '../styles/globals.scss'
import '../styles/mobile.scss'


const MyApp: React.FC<AppProps> = ({ Component, pageProps, router } ): JSX.Element => {
  return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
  );
}
export default MyApp;
