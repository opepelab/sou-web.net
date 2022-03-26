import React, { ReactNode } from "react";
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
      <Filter links={links} setLinks={setLinks} view={view} setView={setView} />
      <Header links={links} setLinks={setLinks} view={view} setView={setView} />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default LayoutProvider;
