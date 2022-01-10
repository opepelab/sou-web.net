import { motion } from "framer-motion";
import Head from "next/head";

const Index = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>sou-web</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="margin50p textLeft inblo">
        <h1>scientist</h1>
        <p>I'm front end program&developer</p>
        <p>I think always the better.</p>
        <p>beautiful&pretty isCoding</p>
        <p>Because never mind? why is it there don't talking?</p>
        <p></p>
        <p>Challenging change the everytime The goal is to sleep like dead every day.</p>
        <p>sou Watanabe</p>
        <p>私の趣味は検証することです。</p>
        <p>直接的な討論は好きではありません。</p>
        <p>出身住まい：日本 東京</p>
        <p>生年：1994年生まれ 戌年</p>
        <p>趣味：読書 </p>
      </main>
    </motion.div>
  );
};

export default Index;
