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
    rawSetColorMode(initialColorValue as never);
  }, [colorMode]);

  const contextValue = useMemo(() => {
    function setColorMode() {
      if (localStorage.theme !== null) {
        window.localStorage.getItem('theme');
      } else if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }

      // const root = window.document.documentElement;
      // localStorage.setItem(COLOR_MODE_KEY, );
      //   root.style.setProperty(cssVarName, colorByTheme[]);
      // ;
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`,
        }}
      /> */}
      {children}
    </ThemeContext.Provider>
  );
};
