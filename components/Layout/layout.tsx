import React, { ReactNode } from "react";
import Header from "components/Header";
import Menu from "components/Menu";
import ToggleDarkMode from "components/DarkToggle";
import Text from "components/Text";
import Footer from "components/Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
