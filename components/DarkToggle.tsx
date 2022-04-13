import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

export const ToggleDarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches)
    ) {
      setDarkMode(true);
      document.documentElement.setAttribute(
        "data-theme",
        "dark"
      );
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute(
        "data-theme",
        "light"
      );
    }
  }, [darkMode]);

  const handleChangeDarkMode = () => {
    if (!darkMode) {
      setDarkMode(true);
      localStorage.theme = "dark";
    } else {
      setDarkMode(false);
      localStorage.theme = "light";
    }
  };

  return (
    <div className="togglePosition">
      <div
        className="iconButton shadow"
        onClick={handleChangeDarkMode}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="flex"
            onClick={handleChangeDarkMode}
            key={darkMode ? "dark" : "light"}
            initial={{ rotate: -120, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className={
                darkMode ? "gg-moon" : "gg-sun"
              }
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
