import { motion } from "framer-motion";
import Head from 'next/head';
import Link from 'next/link'


const NotFound = () => {
    return (
        <motion.div className="inblo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <Head>
                <title>404 - sou</title>
                <meta name="description" content="存在しないページ"/>
            </Head>
            <main>
            <h1>This page does not exist</h1>
                <div className="triangle-bottom" />
                <div>
                    <Link href="/"><a className="scale"><li>Go To Back</li></a></Link>
                </div>
            </main>
        </motion.div>
    );
}

export default NotFound;