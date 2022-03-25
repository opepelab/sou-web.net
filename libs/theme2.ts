import { atom } from "recoil";

let defaultTheme = "light";
if (typeof window !== "undefined") {
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme) {
    defaultTheme = savedTheme;
  } else {
    const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    defaultTheme = isDarkMode ? "dark" : "light";
  }
}

export default atom({
  key: "theme",
  default: defaultTheme,
});
