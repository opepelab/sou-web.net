import { MotionConfig } from "framer-motion";
import { useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
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
      <div className={darkMode ? "toggle black" : "toggle white"} onClick={() => handleChangeDarkMode()}>
        <div className={darkMode ? "gg-moon" : "gg-sun"} />
        {/* <div>
              {darkMode ? <HiMoon size={"25"} color={"deepskyblue"} /> : <HiSun size={"25"} color={"orange"} />}
            </div> */}
      </div>
    </div>
  );
};

export default ToggleDarkMode;
{
  /* <AnimatePresence exitBeforeEnter initial={false}>
  <motion.div
    onClick={() => handleChangeDarkMode()}
    key={darkMode ? "dark-icon" : "light-icon"}
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
  </motion.div>
</AnimatePresence>; */
}
