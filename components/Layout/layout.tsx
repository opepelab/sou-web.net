import React, { useState, useEffect, ReactNode } from "react";
import Header from "../Header";
import MenuButton from "../MenuButton";
import Menu from "../Menu";
import Text from "../Text";
import Footer from "../Footer";
import ThemeToggler from "../ThemeToggler";
import Dropdown4 from "../Drop";
type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <MenuButton open={open} setOpen={setOpen} /> */}
      <Menu />
      <Text />
      <ThemeToggler />
      <Header />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
