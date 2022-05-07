(function () {
  let theme;
  const storageTheme = window.localStorage.getItem('theme');
  if (storageTheme !== null) {
    theme = storageTheme;
  } else {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    theme = mql.matches ? 'dark' : 'light';
  }

  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
})();
