import React, { useState, ReactNode } from 'react';
import Header from '../atoms/Header'
import MenuButton from '../atoms/MenuButton'
import Menu from '../atoms/Menu'
import Logo from '../atoms/Logo'
import NextText from '../atoms/NextText'
import Footer from '../atoms/Footer'

type Props = {
  children: ReactNode;
};

// すべてのコンポーネントをこのファイルが作動する starting components this file.
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
        <div className="inblo footerFix">{ children }</div>
        <Footer />
      </>
    );
}

export default Layout;