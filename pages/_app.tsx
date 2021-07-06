import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return Component (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
