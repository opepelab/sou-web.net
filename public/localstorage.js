(function initTheme() {
  var theme = localStorage.getItem("chakra-ui-color-mode");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", theme);
  }
})();
