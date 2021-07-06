import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Home.module.css';
import Image from 'next/image'


export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About - S.watana</title>
        <meta name="description" content="彼について"/>
      </Head>
      <main>
      <Image src="/images/a.jpg" width={80} height={80} />
        ネコが・・・
        </main>
    </div>
  );
}