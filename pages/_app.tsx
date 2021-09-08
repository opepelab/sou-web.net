import {AppProps} from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/mobile.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
