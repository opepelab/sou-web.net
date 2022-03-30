import Head from "next/head";

type StProp = {
  title: string;
  description: string;
  url: string;
};

const OG = ({ title, description, url }: StProp) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://og-image-sw.vercel.app/${title}.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pull1102" />
      <meta name="twitter:creator" content="@pull1102" />
      <meta property="og:url" content={`https://sou-web.net${url}`} />
    </Head>
  );
};

export default OG;
