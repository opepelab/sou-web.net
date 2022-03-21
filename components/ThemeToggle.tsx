import { useState, useEffect } from "react";

const isDark = (): boolean =>
  (localStorage && localStorage.theme === "dark") ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

const getThemeString = (isDark: boolean): string => (isDark ? "dark" : "light");

const DarkModeToggle = (): JSX.Element => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = (): void => {
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
  }, []);

  const darkModeActive: boolean = process.browser && document.documentElement.classList.contains("dark");
  return (
    <div className="toggle" onClick={() => toggleMode()} key={darkModeActive ? "dark-icon" : "light-icon"}>
      <div className={isDarkMode ? "gg-sun" : "gg-moon"}></div>
    </div>
  );
};

export default DarkModeToggle;
