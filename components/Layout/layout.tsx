import React, { ReactNode } from "react";
import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Filter from "components/Filter";

type Props = {
  children: ReactNode;
};

const LayoutProvider: React.FC<Props> = ({ children }) => {
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
