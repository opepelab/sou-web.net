import { useState, useMemo, useEffect, createContext, ReactNode } from 'react';

type RNode = {
  children: ReactNode;
};

type ContextType = {
  setColorMode: (value: string) => void;
  colorMode: undefined;
};

export const ThemeContext = createContext<undefined | ContextType>(undefined);

export const ThemeProvider: React.FC<RNode> = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState<undefined>(undefined);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute('data-theme');
    rawSetColorMode(initialColorValue as any);
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue: any) {
      const storageTheme = window.localStorage.getItem('theme');
      if (storageTheme !== null) {
        newValue = storageTheme;
      } else {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        mql.matches ? 'dark' : 'light';
      }

      window.document.documentElement.setAttribute('data-theme', newValue);

      rawSetColorMode(newValue);
    }
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
