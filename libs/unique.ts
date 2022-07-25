import { atom } from 'recoil';

export type Theme = string | null;
export const themeState = atom<Theme>({
  key: 'themeKey',
  default: null,
});

export type About = false | true;
export const aboutState = atom<About>({
  key: 'aboutKey',
  default: false,
});

export type Links = false | true;
export const linksState = atom<Links>({
  key: 'linksKey',
  default: false,
});

export type Menu = false | true;
export const menuState = atom<Menu>({
  key: 'menuKey',
  default: false,
});

export type AboutRes = false | true;
export const aboutStateRes = atom<AboutRes>({
  key: 'aboutResKey',
  default: false,
});

export type LinksRes = false | true;
export const linksStateRes = atom<LinksRes>({
  key: 'linksResKey',
  default: false,
});
