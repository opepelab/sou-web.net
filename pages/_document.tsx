// pages/_document.js
import Document, { Html, Head,  Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html lang="JA">
        <Head>
        <link href="/azur.ico" rel="icon" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&family=Zen+Maru+Gothic&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet"></link>
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