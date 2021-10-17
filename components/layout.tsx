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
const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

    return (
      <>
        <StaticMeta />
        <Header open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <PictureHigh />
        { children }
        <Footer />
      </>
    );
}

export default Layout;