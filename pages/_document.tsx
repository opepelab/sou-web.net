// pages/_document.js
import { GA_TRACKING_ID } from "../libs/gtag";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "libs/theme";
import { ColorModeScript } from "@chakra-ui/react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="JA">
        <Head>
          <link rel="shortcut icon" href="/folds.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Hind&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />

          {/* <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Yomogi&display=swap" rel="stylesheet" />

          {/* <link href="https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Heebo&display=swap" rel="stylesheet" /> */}

          {GA_TRACKING_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
export { getServerSideProps } from "components/Sys/chakra";
