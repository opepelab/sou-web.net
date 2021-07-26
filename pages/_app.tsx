import {AppProps} from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
