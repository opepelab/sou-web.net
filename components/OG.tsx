import Head from "next/head";

type StProp = {
  title: string;
  description: string;
};

const OG = ({ title, description }: StProp) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://ogi-api.vercel.app/${title}.png`} />
      <meta name="twitter:card" content={`https://ogi-api.vercel.app/${title}.png`} />
    </Head>
  );
};

export default OG;
