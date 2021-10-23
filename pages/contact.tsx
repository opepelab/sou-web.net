import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'

const Contact: React.FC<HTMLTextAreaElement> = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Layout>
                <Head>
                    <title>contact - sou</title>
                    <meta name="description" content="コンタクト"/>
                </Head>
                <main className="margin25r">
                    <h1>Contact</h1>
                    <div className="triangle-bottom" />
                    <form action="https://formspree.io/f/xyylvaok" method="POST">
                        <dl>
                            <dt><label htmlFor="name">Name*</label></dt>
                            <dd><input type="text" name="name" aria-label="Name area" required /></dd>

                            <dt><label htmlFor="email">Mail*</label></dt>
                            <dd><input type="text" name="email" aria-label="Mail address area" required /></dd>

                            <dt><label htmlFor="massage">Message</label></dt>
                            <dd><textarea name="massage" aria-label="Massage area" required /></dd>
                            <dd><button id="massageButton" type="submit">Send mail</button></dd>
                        </dl>
                    </form>
                </main>
            </Layout>
        </motion.div>   
    );
}


export default Contact;