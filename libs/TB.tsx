import { useEffect } from "react";
import { Theme, useSetTheme } from "libs/theme";

type Props = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const setTheme = useSetTheme();

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute("data-theme");
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  return <>{children}</>;
};
export default ThemeProvider;
