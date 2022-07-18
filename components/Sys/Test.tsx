import { useState, useMemo, useEffect, createContext, ReactNode } from 'react';
import { Script } from 'next';

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
    rawSetColorMode(initialColorValue as never);
  }, [colorMode]);

  const contextValue = `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`;
  return (
    <>
      <Script script={contextValue} />
      {children}
    </>
  );
};
