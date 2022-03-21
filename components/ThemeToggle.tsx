import { useState, useEffect } from "react";

const isDark = (): boolean =>
  (localStorage && localStorage.theme === "dark") ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

const DarkModeToggle = (): JSX.Element => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = (): void => {
    localStorage.theme = !isDarkMode;
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setDarkMode(isDark());
  }, [isDark]);

  return (
    <div className="toggle" onClick={toggleMode}>
      <div className={isDarkMode ? "gg-sun" : "gg-moon"}></div>
    </div>
  );
};

export default DarkModeToggle;
