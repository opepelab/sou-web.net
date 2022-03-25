import { atom, useRecoilState, useSetRecoilState } from "recoil";

export type Theme = "light" | "dark";

const themeState = atom<Theme>({
  key: "themeState",
  default: "light",
});

export const useSetTheme = () => useSetRecoilState(themeState);
