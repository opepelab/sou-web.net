import { atom } from "recoil";

export type Theme = false | true;
export const themeState = atom<Theme>({
  key: "themeState",
  default: false,
});

export type View = false | true;
export const viewState = atom<View>({
  key: "viewState",
  default: false,
});

export type Links = false | true;
export const linksState = atom<Links>({
  key: "linksState",
  default: false,
});
