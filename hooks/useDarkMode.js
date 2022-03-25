import { useRecoilState } from "recoil";
import atomTheme from "../libs/theme2";

export default () => {
  const [theme, setTheme] = useRecoilState(atomTheme);

  const saveTheme = (chosenTheme) => {
    setTheme(chosenTheme);
    document.documentElement.setAttribute("data-theme", chosenTheme);
    window.localStorage.setItem("theme", chosenTheme);
  };

  const toggleTheme = () => {
    saveTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleTheme];
};
