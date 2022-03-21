(function initTheme() {
  var theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.querySelector.classList.add("dark");
  } else {
    document.querySelector.classList.remove("dark");
  }
})();
