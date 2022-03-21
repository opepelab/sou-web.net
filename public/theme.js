(function initTheme() {
  var theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.querySelector.classList.add("dark");
  } else {
    document.querySelector.classList.remove("dark");
  }
})();
