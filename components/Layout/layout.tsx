import React, { useState, useEffect, ReactNode } from "react";
import Header from "../Header";
import MenuButton from "../MenuButton";
import Menu from "../Menu";
import Text from "../Text";
import Footer from "../Footer";
import ThemeToggler from "../ThemeToggler";
import Dropdown2from from "../Drop";
type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <MenuButton open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Text /> <ThemeToggler />
      <Header />
      <Dropdown2from />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
