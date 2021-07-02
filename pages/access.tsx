import React from 'react'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Access</title>
      </Head>
      <main>
      <div className="flex-container">
      
      <Link href="https://github.com/opepelab">
        <Image src="/images/git.png" width={100} height={100} />
      </Link>
      <table width="4%"></table>
      <Link href="https://opepelab.org">
        <Image src="/images/wpss.png" width={100} height={100} />
      </Link>
      <table width="4%"></table>
      <Link href="https://www.linkedin.com/in/s-watanabe-a25157205">
        <Image src="/images/lin.png" width={100} height={100} />
      </Link>
      </div>
      <nav>
        <ul>
          <li><Link href="career">Career</Link></li>
        </ul>
      </nav>
      aaaa
      </main>
 

    </Layout>
  )
}