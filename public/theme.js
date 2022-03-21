(function initTheme() {
  var theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
  }
})();
