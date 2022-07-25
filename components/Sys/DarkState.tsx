import { useEffect, ReactNode } from 'react';
import { Theme, themeState } from 'libs/unique';
import { useSetRecoilState } from 'recoil';

type RNode = {
  children: ReactNode;
};

const DarkState: React.FC<RNode> = ({ children }): JSX.Element => {
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute('data-theme');
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  const NoFlashScript = `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: NoFlashScript,
        }}
      />
      {children}
    </>
  );
};
export default DarkState;
