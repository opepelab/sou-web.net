import { atom, useRecoilState, useSetRecoilState } from "recoil";

export type Theme = "light" | "dark" | "systemUI";

const themeState = atom<Theme>({
  key: "themeState",
  default: "systemUI",
});

export const useSetTheme = () => useSetRecoilState(themeState);

export const useTheme = () => {
  const [theme] = useRecoilState(themeState);
  return { theme };
};
