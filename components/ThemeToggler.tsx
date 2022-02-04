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
    <div className="inblo Butt">
      <button aria-label="Toggle Theme Dark or Light" type="button" className="toggle">
        <div
          aria-expanded={trans}
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light");
            setTrans(!trans);
          }}
        >
          <div className="Big gg-dark-mode" />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggler;
