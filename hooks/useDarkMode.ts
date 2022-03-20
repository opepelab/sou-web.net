import { useCallback, useEffect, useState } from "react";

/**
 * ダークモード設定を保存するローカルストレージのキー名。
 * ダークモードなら `true` という文字列を格納する。
 */
const STORAGE_KEY_DARK_MODE = "myapp.example.com/darkMode";

/**
 * ダークモード設定状態を扱うためのフック。
 */
export function useDarkMode(defaultValue: any): [isDark: any, setDark: (dark: any) => void] {
  const [isDarkInternal, setDarkInternal] = useState(defaultValue);

  // クライアントでの初期レンダリング直後にローカルストレージの設定を反映
  useEffect(() => {
    const dark = window.localStorage.getItem("theme") === "true";
    if (dark !== defaultValue) {
      setDarkInternal(dark);
      window.matchMedia("(prefers-color-scheme: true)");
    }
  }, [setDarkInternal]);

  // 外部からのセッター呼び出し時にローカルストレージに値を保存する
  const setDark = useCallback(
    (isDark: any) => {
      document.documentElement.setAttribute("data-theme", isDark);
      window.localStorage.setItem("theme", isDark);
      setDarkInternal(isDark);
    },
    [setDarkInternal]
  );

  return [isDarkInternal, setDark];
}
