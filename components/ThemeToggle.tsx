import { useState, useEffect } from "react";

export const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
      document.querySelector("html")?.classList.remove("light");
    } else {
      setDarkMode(false);
      document.querySelector("html")?.classList.add("light");
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
