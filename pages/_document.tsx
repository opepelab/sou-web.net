// pages/_document.js
import Document, { Html, Head,  Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html lang="JA">
        <Head>
        <link href="/logo.png" rel="icon" />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;