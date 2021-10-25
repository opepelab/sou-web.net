import React, { useState, ReactNode } from 'react';
import Header from '../Header'
import MenuButton from '../MenuButton'
import Menu from '../Menu'
import Logo from '../Logo'
import NextText from '../NextText'
import Footer from '../Footer'

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

    return (
      <>
        <MenuButton open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Header />
        <div>
          <Logo />
          <NextText />
        </div>
        <div className="footerFix">
          { children }
        </div>
        <Footer />
      </>
    );
}

export default Layout;