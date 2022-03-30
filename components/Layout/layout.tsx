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
  const [view, setView] = React.useState(false);
  const [links, setLinks] = React.useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Filter links={links} setLinks={setLinks} view={view} setView={setView} />
      <Header links={links} setLinks={setLinks} view={view} setView={setView} />
      <Menu />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default LayoutProvider;
