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
    window.document.documentElement.getAttribute('data-theme');
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode() {
      let theme;
      const storageTheme = window.localStorage.getItem('theme');
      if (storageTheme !== null) {
        theme = storageTheme;
      } else {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        theme = mql.matches ? 'dark' : 'light';
      }

      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
    }
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
