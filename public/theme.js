(function initTheme() {
  var theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
  }
})();
