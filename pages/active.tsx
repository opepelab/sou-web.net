import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Home.module.css';


export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Active Log - S.watana</title>
        <meta name="description" content="みえましゅか"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>
      <main>
        <a href="https://github.com/opepelab/C-x9/blob/main/C-x9.c">入力に9掛けて9個出力(C言語)</a>
        </main>
    </div>
  )
}