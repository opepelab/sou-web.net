import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsSun, BsMoonStars, BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

export const ToggleDarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
      <div className="iconButton" onClick={handleChangeDarkMode}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="flex"
            onClick={handleChangeDarkMode}
            key={darkMode ? "dark" : "light"}
            initial={{ rotate: -90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {darkMode ? (
              <BsCloudMoonFill size={24} color={"skyblue"} />
            ) : (
              <BsCloudSunFill size={24} color={"lightsalmon"} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
