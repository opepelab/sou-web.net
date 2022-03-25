import { useEffect, ReactNode } from "react";
import { Theme, themeState } from "libs/theme";
import { useSetRecoilState } from "recoil";

type RNode = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: RNode): JSX.Element => {
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute("data-theme");
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  return <>{children}</>;
};
export default ThemeProvider;
