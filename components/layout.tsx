import React, { useState, ReactNode } from 'react';
import Metatxt from './Metatxt'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Navbar from './Navbar'
import PictureHigh from './PictureHigh'
import Sidebar from './Sidebar'




type Props = {
  children: ReactNode;
};

// すべてのコンポーネントをこのファイルが作動する starting components this file.
const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

    return (
      <div className="resp body">
        <Metatxt />
        <Header open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <PictureHigh />
        <Sidebar />
        { children }
        <Footer />
      </div> 
    );
}

export default Layout;