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
      <div className={darkMode ? "shadow black" : "shadow white"} onClick={() => handleChangeDarkMode()}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="flex"
            onClick={() => handleChangeDarkMode()}
            key={darkMode ? "dark-icon" : "light-icon"}
            initial={{ rotate: -120, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={darkMode ? "gg-moon" : "gg-sun"} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
