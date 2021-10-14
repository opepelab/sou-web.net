import {AppProps} from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/mobile.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <div className="selectNone">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}
export default MyApp;
