import { useEffect } from "react";
import { atom, useSetRecoilState } from "recoil";

type Props = {
  children: JSX.Element;
};

export type Theme = "light" | "dark";

const themeState = atom<Theme>({
  key: "themeState",
  default: "light",
});

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const initialColorValue = window.document.documentElement.getAttribute("style");
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){let e;const t=window.localStorage.getItem("chakra-ui-color-mode");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("style",e)}();`,
        }}
      />
      {children}
    </>
  );
};
export default ThemeProvider;
