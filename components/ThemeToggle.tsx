import { useState, useEffect, useLayoutEffect } from "react";
import { useTheme } from "next-themes";

// export const ToggleDarkMode = () => {
//   const [darkMode, setDarkMode] = useState(false);
// useEffect(() => {
//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     setDarkMode(true);
//     document.querySelector("html")?.classList.add("dark");
//   } else {
//     setDarkMode(false);
//     document.querySelector("html")?.classList.remove("dark");
//   }
// }, [darkMode]);

// const handleChangeDarkMode = () => {
//   if (darkMode) {
//     localStorage.theme = "light";
//     setDarkMode(false);
//   } else {
//     localStorage.theme = "dark";
//     setDarkMode(true);
//   }
// };
const canUseDOM = typeof window !== "undefined";
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export const ThemeChanger: React.VFC = () => {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useIsomorphicLayoutEffect(() => {
    setTheme(theme);
  }, []);

  return (
    <div className={theme === "dark" ? "toggle black" : "toggle white"} onClick={() => handleSetTheme()}>
      <div className={theme === "dark" ? "gg-moon" : "gg-sun"}></div>
    </div>
  );
};

export default ThemeChanger;
