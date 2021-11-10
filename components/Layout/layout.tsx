import React, { useState, ReactNode } from 'react';
import Header from '../Header'
import MenuButton from '../MenuButton'
import Menu from '../Menu'
import Text from '../Text'
import Footer from '../Footer'
import ThemeToggler from '../ThemeToggler'

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [trans, setTrans] = useState(false);

    return (
      <>
        <MenuButton open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Header />
        <Text />
        <ThemeToggler trans={trans} setTrans={setTrans}/>
        <div className="footerFix">
          { children }
        </div>
        <Footer />
      </>
    );
}

export default Layout;