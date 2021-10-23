import { motion } from "framer-motion";
import HomeLayout from '../components/Layout/HomeLayout'
import Head from 'next/head'
import Link from 'next/link'


const NotFound: React.FC = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <HomeLayout home={false}>
                <Head>
                    <title>404 - sou</title>
                    <meta name="description" content="存在しないページ"/>
                </Head>
                <main className="CN">
                    <h1>Does not don't sync</h1>
                    <div className="triangle-bottom" />
                    <dl>
                    <Link href="/"><a className="redLinks scale">Return 404 to TOP</a></Link>
                    </dl>
                </main>
            </HomeLayout>
        </motion.div>
    );
}

export default NotFound;