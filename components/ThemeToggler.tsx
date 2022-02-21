import { useContext } from "react";
import { ThemeContext } from "styled-components";

type StrProps = {
  theme: string;
  toggleTheme: StringConstructor;
};

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext<StrProps>(ThemeContext);

  return (
    <div className="inblo">
      <div
        tabIndex={0}
        className="toggle"
        aria-label="Toggle Theme Dark or Light"
        onClick={() => {
          toggleTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <div className={theme === "dark" ? "gg-sun" : "gg-moon"} />
      </div>
    </div>
  );
};

export default ThemeToggler;
