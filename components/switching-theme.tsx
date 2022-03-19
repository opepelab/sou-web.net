/**
 * ローカルストレージにカラーモードの識別子: dark/lightを登録する.
 * htmlタグにdata-theme属性を付与して、見た目の切り替えを実現する.
 */

const SwitchingTheme = (currentTheme: any) => {
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
      <div tabIndex={0} className="toggle" aria-label="Toggle Theme Dark or Light" onClick={changeTheme}>
        <div className={currentTheme === "dark" ? "gg-sun" : "gg-moon"} />
      </div>
    </>
  );
};
export default SwitchingTheme;
