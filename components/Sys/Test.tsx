import { useState, useMemo, useEffect, createContext, ReactNode } from 'react';

type RNode = {
  children: ReactNode;
};

// type ContextType = {
//   colorMode: undefined;
// };

export const ThemeContext = createContext<undefined>(undefined);

export const ThemeProvider: React.FC<RNode> = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState<undefined>(undefined);

  useEffect(() => {
    const initialCOlorValue = window.document.documentElement.getAttribute('data-theme');
    rawSetColorMode(initialCOlorValue as any);
  }, [colorMode, rawSetColorMode]);

  const contextValue = `
    (function () {
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
    });`;

  return (
    <ThemeContext.Provider value={undefined}>
      <script
        dangerouslySetInnerHTML={{
          __html: contextValue,
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
};
