import { useContext } from "react";
import { ThemeContext } from "styled-components";

type StrProps = {
  currentTheme: string;
  toggleTheme: StringConstructor;
};

export const ThemeToggler = () => {
  const { currentTheme, toggleTheme } = useContext<StrProps>(ThemeContext);
  // localStorage.setItem("theme", currentTheme);
  return (
    <div className="inblo">
      <div
        tabIndex={0}
        className="toggle"
        aria-label="Toggle Theme Dark or Light"
        onClick={() => {
          toggleTheme(currentTheme === "dark" ? "light" : "dark");
        }}
      >
        <div className={currentTheme === "dark" ? "gg-sun" : "gg-moon"} />
      </div>
    </div>
  );
};

export default ThemeToggler;
