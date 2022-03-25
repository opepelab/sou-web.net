/**
 * ローカルストレージにカラーモードの識別子: dark/lightを登録する.
 * htmlタグにdata-theme属性を付与して、見た目の切り替えを実現する.
 */
export default function SwitchingTheme() {
  const setTheme = (newTheme: string) => {
    const theme = !(newTheme === "dark" || newTheme === "light") ? "light" : newTheme;
    // ここではdata-themeとしていますが任意の名前でOKで大丈夫です.
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  };
  const getTheme = () => {
    const currentTheme = window.localStorage.getItem("theme");
    if (currentTheme) {
      return currentTheme;
    }
    // ローカルストレージにデータ未登録の場合は、クライアントのシステムの外観モードで決定
    // (メディアクエリの結果から判定)
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    return query.matches ? "dark" : "light";
  };
  const changeTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  setTheme(getTheme());

  return (
    <>
      <button type="button" onClick={changeTheme}>
        Switching Theme
      </button>
      <style jsx>{`
        button {
          border: 0;
          cursor: pointer;
          outline: none;
          padding: 10px 15px;
          appearance: none;
          background-color: var(--color-link);
          border-radius: 5px;
          color: var(--color-button-text);
        }
      `}</style>
    </>
  );
}
