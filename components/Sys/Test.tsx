import { useState, useMemo, useEffect, createContext, ReactNode } from 'react';

type RNode = {
  children: ReactNode;
};

type ContextType = {
  setColorMode: (value: string) => void;
  colorMode: undefined;
};

export const ThemeContext = createContext<null | ContextType>(null);

export const ThemeProvider: React.FC<RNode> = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState<undefined>(undefined);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute('data-theme');
    rawSetColorMode(initialColorValue as any);
  }, [rawSetColorMode]);

  const contextValue = useMemo(() => {
    function setColorMode(newValue: any) {
      const root = window.document.documentElement;
      localStorage.setItem('theme', newValue);

      root.setAttribute('data-theme', newValue);

      rawSetColorMode(newValue);
    }
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
