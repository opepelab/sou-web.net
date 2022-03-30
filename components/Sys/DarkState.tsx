import { useEffect, ReactNode } from "react";
import { Theme, themeState } from "libs/unique";
import { useSetRecoilState } from "recoil";

type RNode = {
  children: ReactNode;
};

const DarkState: React.FC<RNode> = ({ children }): JSX.Element => {
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute("data-theme");
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){const x=window.localStorage.getItem("theme");if(x!==null)x;else{window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",x)}();`,
        }}
      />
      {children}
    </>
  );
};
export default DarkState;
