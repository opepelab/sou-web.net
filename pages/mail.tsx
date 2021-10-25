import { useMail } from '.././hooks/useMail';
import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'

export const Mail: React.FC<HTMLTextAreaElement> = (): JSX.Element => {
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
            <title>contact - sou</title>
            <meta name="description" content="コンタクト"/>
        </Head>
        <main className="CN">
          <form>
            <dl>
              <dt><label htmlFor="name">Name*</label></dt>
              <dd><input type="text" name="name" aria-label="Name area" onChange={(e) => setName(e.target.value)} required  /></dd>

              <dt><label htmlFor="email">Mail*</label></dt>
              <dd><input type="text" name="name" aria-label="Name area" onChange={(e) => setMail(e.target.value)} required  /></dd>
              
              <dt><label htmlFor="massage">Message</label></dt>
              <dd><textarea name="massage" aria-label="Massage area" onChange={(e) => setMessage(e.target.value)} required  /></dd>
              <dd><button id="massageButton" type="submit" onClick={send}>Send</button></dd>
            </dl>
          </form>
        </main>
      </motion.div>
    </Layout>
  );
}

export default Mail;