import { motion } from "framer-motion";
import Head from 'next/head'


const Index = () => {
  return (
    <motion.div className="inblo"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <Head>
        <title>sou</title>
        <meta name="description" content="トップ"/>
      </Head>
      <main>
        <h1 className="Title">Sou/Wv.</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>星座 (Sign)</dt>
          <dd>Scorpio</dd>
          <dt>十二支 </dt>
          <dd>戌年 (Dog)</dd>
          <dt>Birthday</dt>
          <dd>2nd November 1994</dd>
          <dt>4タイプ </dt>
          <dd>法則</dd>
          <dt>趣味</dt>
          <dd>読書 倫理 ゲーム</dd>
        </dl>
      </main>
    </motion.div>
  );
}

export default Index;