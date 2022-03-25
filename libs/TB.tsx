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
    const initialColorValue = window.document.documentElement.getAttribute("data-theme");
    setTheme(initialColorValue as Theme);
  }, [setTheme]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`,
        }}
      />
      {children}
    </>
  );
};
export default ThemeProvider;
