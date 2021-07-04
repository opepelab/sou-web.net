import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout home={true}>
      <Head>
        <title>Career</title>
      </Head>
      <main>
      <div className="flex-container">
      
      <Link href="https://github.com/opepelab">
        <a target="_blank"><Image src="/images/gitx.png" width={100} height={100} /></a>
      </Link>
      <table width="4%"></table>
      <Link href="https://opepelab.org">
      <a target="_blank"><Image src="/images/wpss.png" width={100} height={100} /></a>
      </Link>
      <table width="4%"></table>
      <Link href="https://www.linkedin.com/in/s-watanabe-a25157205">
        <a target="_blank"><Image src="/images/linkedx.png" width={100} height={100} /></a>
      </Link>
      </div>
      <nav>
        <ul>
        <li><Link href="career">Career</Link></li>
        <li><Link href="/">TOP</Link></li>
        <li><Link href="access">Access</Link></li>
        </ul>
      </nav>
      
      JavaScript React Next.js Node.js/TypeScript,SaSS/Currently learning.<br></br>
      discuss for adjusting on frequently.
      
      <h5>
        <Link href="document">
          <a>document</a>
        </Link>
      </h5>
      </main>


    </Layout>
  )
}