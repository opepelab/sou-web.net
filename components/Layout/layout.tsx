import React, { ReactNode } from "react";
import Header from "../Header";
import Menu from "../Menu";
import Text from "../Text";
import Footer from "../Footer";
import ThemeToggleButton from "components/Theme-Toggle-Button";
{
  /* <div className="footerFix"></div> */
}
type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Menu />
      <ThemeToggleButton />
      <Text />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
export { getServerSideProps } from "components/Sys/chakra";
