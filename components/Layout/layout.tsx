import React, { ReactNode } from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { useLayoutEffect, useEffect, useState } from "react";
type Props = {
  children: ReactNode;
};
const canUseDOM = typeof window !== "undefined";
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const Layout: React.FC<Props> = ({ children }) => {
  useIsomorphicLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("chakra-ui-color-mode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <Menu />
      <Header />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
