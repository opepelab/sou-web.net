import { useState, useEffect } from "react";

const isDark = (): boolean =>
  (localStorage && localStorage.theme === "dark") ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

const getThemeString = (isDark: boolean): string => (isDark ? "dark" : "light");

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    localStorage.theme = getThemeString(!isDarkMode);
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setDarkMode(isDark());
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "toggle black" : "toggle white"} onClick={() => toggleMode()}>
      <div className={isDarkMode ? "gg-moon" : "gg-sun"}></div>
    </div>
  );
};

export default DarkModeToggle;
