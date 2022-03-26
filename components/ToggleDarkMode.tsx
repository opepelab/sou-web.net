import { MotionConfig } from "framer-motion";
import { useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
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
    <div className="togglePosition">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          onClick={() => handleChangeDarkMode()}
          key={darkMode ? "dark-icon" : "light-icon"}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={darkMode ? "shadow black" : "shadow white"} onClick={() => handleChangeDarkMode()}>
            <div className={darkMode ? "gg-moon" : "gg-sun"} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ToggleDarkMode;
