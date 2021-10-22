// pages/_document.js
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=optional" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=optional" rel="stylesheet" />
        <link rel="icon" href="/azur.ico" />
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