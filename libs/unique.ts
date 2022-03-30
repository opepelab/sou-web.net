import { atom } from "recoil";

export type Theme = "light" | "dark" | "systemUI";
export const themeState = atom<Theme>({
  key: "themeState",
  default: "systemUI",
});

export type About = false | true;
export const aboutState = atom<About>({
  key: "aboutState",
  default: false,
});

export type Links = false | true;
export const linksState = atom<Links>({
  key: "linksState",
  default: false,
});
