import Head from "next/head";
import { useRouter } from "next/router";
type StProp = {
  title: string;
  description: string;
};

const OG = ({ title, description }: StProp) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="description" content={description} />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={`https://og-image-sw.vercel.app/${title}.png`}
      />
      <meta
        property="og:url"
        content={`https://sou-web.net${router.asPath}`}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" content="@pull1102" />
      <meta name="twitter:creator" content="@pull1102" />
    </Head>
  );
};

export default OG;
