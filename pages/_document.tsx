// pages/_document.js
import { GA_TRACKING_ID } from "../libs/gtag";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";

import Terser from "terser";
import mem from "mem";

const minify = mem(Terser.minify);

const InlineJs: React.FC<{ code: string; children?: never }> = ({ code }) => {
  const minifyOutput = minify(code);

  if (minifyOutput) {
    throw minifyOutput;
  }

  if (!minifyOutput) {
    throw new Error("Minified code is empty");
  }

  return <script dangerouslySetInnerHTML={{ __html: minifyOutput }} />;
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="JA">
        <Head>
          <link rel="shortcut icon" href="/folds.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff" rel="stylesheet" />
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
        <body className="dark:bg-stone-800 dark:text-zinc-100 bg-amber-50 text-gray-600">
          <InlineJs
            code={`
              (function initTheme() {
                var theme = localStorage.theme.getItem("theme");
                if (theme === "dark") {
                document.querySelector("html").classList.add("dark");
              }
              })();
            `}
          />
          <Main />
          <NextScript />
          {/* <Script src="/localstorage.js" strategy="beforeInteractive" /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
