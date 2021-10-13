import React, { useState, ReactNode } from 'react';
import StaticMeta from './StaticMeta'
import Header from './Header'
import Menu from './Menu'
import PictureHigh from './PictureHigh'
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
      <div className="over">  
        <Header open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <PictureHigh />
        { children }
        <Footer />
      </div> 
      </>
    );
}

export default Layout;