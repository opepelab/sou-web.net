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
          toggleTheme(theme === "light" ? "dark" : "light");
          setTrans(!trans);
        }}
      >
        <div className="toggle">&#x2600;</div>
      </div>
    </div>
  );
};

export default ThemeToggler;
