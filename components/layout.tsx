import React, { useState, ReactNode } from 'react';
import StaticMeta from './StaticMeta'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Image from 'next/image'
import ActiveLink from './ActiveLink'

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
        <Header open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
          {!home && (
          <div className="Logo inblo">
            <Image className="Maru mobile" src="/SVG/jett.svg" width={50} height={50} />
          </div>)}
        {!home && (
        <div className="flex-container marginTop">
            <ActiveLink href="/contact" activeClassName="colorState">
                <a>Email</a>
            </ActiveLink>
            <ActiveLink href="/blog" activeClassName="colorState">
                <a>Post</a>
            </ActiveLink>
        </div>)}
        <div  className="footerFix inblo">
        { children }
        </div>
        <Footer />
      </>
    );
}

export default Layout;