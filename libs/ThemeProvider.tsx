import { useState, useMemo, useEffect, createContext, ReactNode, SetStateAction } from "react";
import { Colors } from "libs/theme";
type Prov = {
  children: ReactNode;
};

type ColorMode = "light" | "dark";
type ColorTheme = {
  colorMode: SetStateAction<undefined>;
  changeColorMode: (value: ColorMode) => void;
};

export const ThemeContext = createContext<any>(null);
export const ThemeProvider = ({ children }: Prov) => {
  const [colorMode, setColorMode] = useState(undefined);
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
    setColorMode(initialColorValue as any);
  }, []);

  const changeColorMode = useMemo(() => {
    function setColorMode(mode: any) {
      const root = window.document.documentElement;

      root.style.setProperty("--initial-color-mode", mode);
      root.style.setProperty("--color-text", mode === "light" ? Colors.light.textColor : Colors.dark.textColor);
      root.style.setProperty(
        "--color-sub-text",
        mode === "light" ? Colors.light.subTextColor : Colors.dark.subTextColor
      );
      root.style.setProperty(
        "--color-background",
        mode === "light" ? Colors.light.backgroundColor : Colors.dark.backgroundColor
      );
      root.style.setProperty(
        "--color-primary",
        mode === "light" ? Colors.light.primaryColor : Colors.dark.primaryColor
      );

      setColorMode(mode);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, setColorMode]);

  return <ThemeContext.Provider value={changeColorMode}>{children}</ThemeContext.Provider>;
};
