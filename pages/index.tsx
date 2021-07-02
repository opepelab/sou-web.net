import React from 'react'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout home={true}>
      <Head>
        <title>TOP</title>
      </Head>
      <main>
      <div className="flex-container">
      
      <Link href="https://github.com/opepelab">
        <Image src="/images/gitx.png" width={100} height={100} />
      </Link>
      <table width="4%"></table>
      <Link href="https://opepelab.org">
        <Image src="/images/wpss.png" width={100} height={100} />
      </Link>
      <table width="4%"></table>
      <Link href="https://www.linkedin.com/in/s-watanabe-a25157205">
        <Image src="/images/linkedx.png" width={100} height={100} />
      </Link>
      </div>
      <nav>
        <ul>
          <li><Link href="career">Career</Link></li>
          <li><Link href="about">About</Link></li>
          <li><Link href="access">Access</Link></li>
        </ul>
      </nav>
      
      ようこそ、こちらのWEB appは私のコンピュータサイエンスの活動内容や技術を載せています,
      <h4>プロフィール</h4>
        出生 : 北九州市小倉北区<br></br>
        1994/11/02 戌年
        </main>
    </Layout>
  )
}