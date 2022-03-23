import { useState, useEffect, useLayoutEffect } from "react";

const canUseDOM = typeof window !== "undefined";
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  useIsomorphicLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
    } else {
      setDarkMode(false);
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  const handleChangeDarkMode = () => {
    if (darkMode) {
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };
  return (
    <div className={darkMode ? "toggle black" : "toggle white"} onClick={() => handleChangeDarkMode()}>
      <div className={darkMode ? "gg-moon" : "gg-sun"}></div>
    </div>
  );
};

export default ToggleDarkMode;
