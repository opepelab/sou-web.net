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
        className="toggle"
        aria-expanded={trans}
        onClick={() => {
          toggleTheme(theme === "light" ? "dark" : "light");
          setTrans(!trans);
        }}
      >
        <div aria-label="Toggle Theme Dark or Light">
          <div className="sun" />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
