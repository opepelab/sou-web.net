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
      <button
        className="toggle"
        aria-expanded={trans}
        aria-label="Toggle Theme Dark or Light"
        onClick={() => {
          toggleTheme(theme === "light" ? "dark" : "light");
          setTrans(!trans);
        }}
      >
        <div className="gg-sun" />
      </button>
    </div>
  );
};

export default ThemeToggler;
