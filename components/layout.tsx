import React, { useState, ReactNode } from 'react';
import StaticMeta from './StaticMeta'
import Header from './Header'
import Menu from './Menu'
import Logo from './Logo'
import NextText from './NextText'
import Footer from './Footer'

type Props = {
  children: ReactNode;
};
// すべてのコンポーネントをこのファイルが作動する starting components this file.
const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

    return (
      <>
        <StaticMeta />
        <Header open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Logo />
        <NextText />
        <div  className="inblo footerFix">
        { children }
        </div>
        <Footer />
      </>
    );
}

export default Layout;