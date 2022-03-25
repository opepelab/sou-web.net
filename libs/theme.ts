import { atom } from "recoil";

export type Theme = "light" | "dark" | "systemUI";
export const themeState = atom<Theme>({
  key: "themeState",
  default: "systemUI",
});
