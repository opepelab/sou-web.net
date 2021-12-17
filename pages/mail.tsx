import { useMail } from ".././hooks/useMail";
import { motion } from "framer-motion";
import Head from "next/head";

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Head>
        <title>contact - sou</title>
        <meta name="description" content="メール" />
      </Head>
      <main className="CN">
        <p>Are you sure?</p>
        <form>
          <dl>
            <dt>
              <label htmlFor="name">Name*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setName(e.target.value)} required />
            </dd>

            <dt>
              <label htmlFor="email">Mail*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setMail(e.target.value)} required />
            </dd>

            <dt>
              <label htmlFor="massage">Message</label>
            </dt>
            <dd>
              <textarea name="massage" aria-label="Massage area" onChange={(e) => setMessage(e.target.value)} required />
            </dd>
            <dd>
              <button id="massageButton" type="submit" onClick={send}>
                送る
              </button>
            </dd>
          </dl>
        </form>
      </main>
    </motion.div>
  );
};

export default Mail;
