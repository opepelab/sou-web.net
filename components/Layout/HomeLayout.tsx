import React, { useState, ReactNode } from 'react';
import Home from '../atoms/Home'
import Menu from '../atoms/Menu'
import Footer from '../atoms/Footer'

type Props = {
  children: ReactNode;
  home: boolean;
};

const Layout: React.FC<Props> = ({ children, home }) => {
  const [open, setOpen] = useState(false);

    return (
      <>
        { home && 
        <Home open={open} setOpen={setOpen} /> }
        <Menu open={open} setOpen={setOpen} />
        <div className="footerFix">
          { children }
        </div>
        <Footer />
      </>
    );
}

export default Layout;