(function initTheme() {
  var theme = localStorage.theme.getItem("theme");
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
})();
