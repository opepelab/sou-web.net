import { useEffect, ReactNode } from "react";
import { Theme, themeState } from "libs/theme";
import { useSetRecoilState } from "recoil";
import Script from "next/script";

type RNode = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: RNode): JSX.Element => {
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute("data-theme");
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`,
        }}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
};
export default ThemeProvider;
