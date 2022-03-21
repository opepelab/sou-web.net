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
  });

  return (
    <div className={isDarkMode ? "ToggleMB white" : "ToggleMB black"} onClick={() => toggleMode()}>
      <div className={isDarkMode ? "gg-sun white" : "gg-moon black"}></div>
    </div>
  );
};

export default DarkModeToggle;
