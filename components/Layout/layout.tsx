import React, { ReactNode } from "react";
import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";

type Props = {
  children: ReactNode;
};

const LayoutProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default LayoutProvider;
