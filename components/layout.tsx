import React, { useState, ReactNode } from 'react';
import StaticMeta from './StaticMeta'
import Header from './Header'
import MenuButton from './MenuButton'
import Menu from './Menu'
import Home from './Home'
import Logo from './Logo'
import NextText from './NextText'
import Footer from './Footer'

type Props = {
  children: ReactNode;
  home: boolean;
};

// すべてのコンポーネントをこのファイルが作動する starting components this file.
const Layout: React.FC<Props> = ({ children, home }) => {
  const [open, setOpen] = useState(false);

    return (
      <>
        <StaticMeta />
        <Menu open={open} setOpen={setOpen} />
        {!home && <div>
        <Header />
        <MenuButton open={open} setOpen={setOpen} />
        <Logo /><NextText />
        </div>}
        {home && <div><Home open={open} setOpen={setOpen} /></div>}
        <div className="inblo footerFix">
        { children }
        </div>
        <Footer />
      </>
    );
}

export default Layout;