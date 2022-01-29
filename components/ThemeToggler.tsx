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
        aria-expanded={trans}
        onClick={() => {
          toggleTheme(theme === "dark" ? "light" : "dark");
          setTrans(!trans);
        }}
      >
        <div className="toggle">☀</div>
      </div>
    </div>
  );
};

export default ThemeToggler;
