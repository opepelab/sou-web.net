import { useEffect, ReactNode } from "react";
import { Theme, themeState } from "libs/unique";
import { useSetRecoilState } from "recoil";

type RNode = {
  children: ReactNode;
};

const DarkState: React.FC<RNode> = ({ children }): JSX.Element => {
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute("style");
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){let e;const t=window.localStorage.getItem("chakra-ui-color-mode");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: --chakra-ui-color-mode:dark)").matches?"--chakra-ui-color-mode:dark":"--chakra-ui-color-mode:light"}document.documentElement.setAttribute("style",e)}();`,
        }}
      />
      {children}
    </>
  );
};
export default DarkState;
