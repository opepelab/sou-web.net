import { useState, useEffect, useLayoutEffect } from "react";

export const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
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
      <div className={darkMode ? "gg-moon" : "gg-sun"} />
    </div>
  );
};

export default ToggleDarkMode;
