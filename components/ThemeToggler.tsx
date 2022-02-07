import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

type StrProps = {
  theme: string;
  toggleTheme: StringConstructor;
};

export const ThemeToggler = () => {
  const [trans, setTrans] = useState(false);
  const { theme, toggleTheme } = useContext<StrProps>(ThemeContext);

  return (
    <div className="inblo">
      <div
        tabIndex={0}
        className="toggle"
        aria-expanded={trans}
        aria-label="Toggle Theme Dark or Light"
        onClick={() => {
          toggleTheme(theme === "dark" ? "light" : "dark");
          setTrans(!trans);
        }}
      >
        <div className={theme === "dark" ? "gg-sun" : "gg-moon"} />
      </div>
    </div>
  );
};

export default ThemeToggler;
