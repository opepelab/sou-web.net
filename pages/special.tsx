import { motion } from "framer-motion";
import Layout from '../components/layout'
import Head from 'next/head'


const Special: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <Layout home={false}>
        <Head>
          <title>育ててくれた人たち</title>
          <meta name="description" content="私の習得ルート"/>
        </Head>
        <main>
        <h1>スペシャルサンクス</h1>
        <div className="triangle-bottom" />
	      <h2>思い出をくれたゲームたち</h2>
	      <p>スマブラ64 DX X SP</p>
	      <p>Gunz/ゴールデンアイ 007/SuddonAttack/Valorant</p>
	      <p>Phantasy Star Online episode1＆2</p>
	      <p>GrandFantasia－精霊物語－</p>
	      <h2>ブログの人とエンジニアさん</h2>
        <p>pechorinさん/konokey2さん/マナブさん/マコなり社長さん/</p>
        <p>/ T.Furukawaさん/ Ryusouさん/ piro(kk-web)さん/ Irisawaさん/ ncaq/さん</p>
        
        <h2>読んだ本</h2>
        <p>/ フリーズする脳 / 脳が冴える15の習慣 / 脳と気持ちの整理術 /</p>
        <p>/ 自分に気づく心理学 / 自分の中に毒を持て /</p>
        <p>イシューからはじめよ /</p>
        <p>/ 嫌われる勇気 / 幸せになる勇気 /</p>
        <p>プログラマが知るべき97のこと</p>

        <h2>「 いつか組んでみたいPC 」</h2>
        <p>MotherBoard : ASUS<br />
        Solid State Drive : M.2 2280 NVMe Gen5x4 <br />
        Random Access Memory : DDR5 12,600MHz 128GBx4<br />
        Central Processing Unit : Intel @メモリさえあればなんでもいい</p>
      </main>
      </Layout>
    </motion.div>
  );
}




export default Special;