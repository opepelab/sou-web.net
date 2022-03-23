(function initTheme() {
  var theme = localStorage.getItem("chakra-ui-color-mode");
  if (theme === "dark") {
    document.querySelector("html")?.classList.add("dark");
  }
})();
