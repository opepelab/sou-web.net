import React, { ReactNode } from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Menu />
      <Header />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
