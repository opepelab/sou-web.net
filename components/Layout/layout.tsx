import React, { ReactNode } from "react";
import Header from "../Header";
import Menu from "../Menu";
import Text from "../Text";
import Footer from "../Footer";
import ThemeToggler from "components/ThemeToggle";

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Menu />
      <ThemeToggler />
      <Text />
      <Header />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
