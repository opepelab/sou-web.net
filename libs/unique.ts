import { atom } from "recoil";

export type Theme = "light" | "dark" | "systemUI";
export const themeState = atom<Theme>({
  key: "theme",
  default: "systemUI",
});

export type About = false | true;
export const aboutState = atom<About>({
  key: "about",
  default: false,
});

export type Links = false | true;
export const linksState = atom<Links>({
  key: "links",
  default: false,
});

export type Menu = false | true;
export const menuState = atom<Menu>({
  key: "menu",
  default: false,
});

export type AboutRes = false | true;
export const aboutStateRes = atom<AboutRes>({
  key: "aboutRes",
  default: false,
});

export type LinksRes = false | true;
export const linksStateRes = atom<LinksRes>({
  key: "linksRes",
  default: false,
});
