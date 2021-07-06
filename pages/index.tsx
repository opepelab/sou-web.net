import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Home.module.css';


export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>TOP - S.watana</title>
        <meta name="description" content="トップページ"/>
      </Head>
        <main>
          こちらのウェブアプリは私のコンピュータサイエンスの活動内容や技術を載せています.
          <h4>プロフィール</h4>
          出身住まい：日本 東京都<br />
          生年：1994年生まれ 戌年<br />
          趣味：読書 お絵かき 音楽<br />
        </main>
    </div>
  )
}