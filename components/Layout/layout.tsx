import React, { ReactNode } from "react";
import Header from "../Header";
import Menu from "../Menu";
import Text from "../Text";
import Footer from "../Footer";
import ThemeToggle from "components/ThemeToggle";
import Script from "next/script";
type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Script src="/theme.js" strategy="lazyOnload" />
      <Menu />
      <ThemeToggle />
      <Text />
      <Header />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
