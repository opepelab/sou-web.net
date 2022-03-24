import { ThemeContext } from "libs/ThemeProvider";
import { useContext, Dispatch, SetStateAction } from "react";

type Toggle = {
  colorMode: SetStateAction<boolean>;
  setColorMode: Dispatch<undefined>;
};

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext<Toggle>(ThemeContext);

  return (
    <div>
      <div className={colorMode ? " black" : " white"} onClick={() => setColorMode()}>
        <div className={colorMode ? "gg-moon" : "gg-sun"} />
      </div>
    </div>
  );
};

export default DarkToggle;
