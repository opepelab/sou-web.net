import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Home.module.css';

export default function Career() {
  return (
    <div className="container">
      <Head>
        <title>Career - S.watana</title>
      </Head>
      <main>
        ぐちゃぐちゃです。Python→C→JavaScript→Next.js→React→Nextj..予定していますTypeScriptを。<br />
        <br />
      JavaScript React Next.js Node.js/TypeScript,SaSS/Currently learning.<br />
      discuss for adjusting on frequently.
      <div className="flex-container">
      <Link href="03">
        <a className={Styles.btn}>これぽち</a>
      </Link>
      </div>
      <h5>
        <Link href="document">
          <a>document</a>
        </Link>
      </h5>
      </main>
    </div>
  )
}