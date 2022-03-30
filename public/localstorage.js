(function () {
  let storageTheme = window.localStorage.getItem("theme");
  if (storageTheme !== null) {
    storageTheme;
  } else {
    const ssw = window.matchMedia("(prefers-color-scheme: dark)");
    storageTheme = ssw.matches ? "dark" : "light";
  }

  const root = document.documentElement;
  root.setAttribute("data-theme", storageTheme);
})();
