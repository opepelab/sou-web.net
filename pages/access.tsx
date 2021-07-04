import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout home={true}>
      <Head>
        <title>Access</title>
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
        <li><Link href="/">TOP</Link></li>
        <li><Link href="access">Access</Link></li>
        </ul>
      </nav>
      <h4>Sosial</h4>
      <Link href="https://com.nicovideo.jp/community/co1568349">
        niconico
      </Link>
      <br />
      <Link href="https://www.facebook.com/opepelabFacebook">  
        Facebook
      </Link>
      <br />
      <Link href="https://note.com/opepelab/">  
        note
      </Link>

      </main>
 

    </Layout>
  )
}