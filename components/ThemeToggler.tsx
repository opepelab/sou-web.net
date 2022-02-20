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
          toggleTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <div className={theme === "light" ? "gg-moon" : "gg-sun"} />
      </div>
    </div>
  );
};

export default ThemeToggler;
