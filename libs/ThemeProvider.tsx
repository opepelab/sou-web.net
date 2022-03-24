import { useState, useEffect, createContext, ReactNode, SetStateAction } from "react";

type Prov = {
  children: ReactNode;
};

type ColorMode = "light" | "dark";
type ColorTheme = {
  colorMode: SetStateAction<undefined>;
  changeColorMode: (value: ColorMode) => void;
};

export const ThemeContext = createContext<ColorTheme | null>(null);
export const ThemeProvider = ({ children }: Prov) => {
  const [colorMode, setColorMode] = useState(undefined);
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
    setColorMode(initialColorValue as any);
  }, []);
  const changeColorMode = (value: ColorMode) => {
    setColorMode(value as any);
  };
  return <ThemeContext.Provider value={{ colorMode, changeColorMode }}>{children}</ThemeContext.Provider>;
};
