import { motion } from "framer-motion";
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'


const NotFound: React.FC = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Layout home={true}>
            <Head>
                <title>404 - sou</title>
                <meta name="description" content="存在しないページ"/>
            </Head>
            <main>
            <h1>Don't sync does not</h1>
                <div className="triangle-bottom" />
                <div>
                    <Link href="/"><a className="scale"><li>Return TOP</li></a></Link>
                </div>
            </main>
            </Layout>
        </motion.div>
    );
}

export default NotFound;