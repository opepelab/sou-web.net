(function initTheme() {
  var theme = localStorage.theme.getItem("theme");
  if (theme === "dark") {
    document.querySelector("html").classList.setItem("dark");
  } else {
    document.querySelector("html").classList.removeItem("dark");
  }
})();
