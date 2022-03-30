import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Filter from "components/Sys/Filter";

type RNode = {
  children: ReactNode;
};

const LayoutProvider: React.FC<RNode> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Sou Watanabe" />
        <meta name="color-scheme" content="light dark" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Filter />
      <Header />
      <Menu />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default LayoutProvider;
