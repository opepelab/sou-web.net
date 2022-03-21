const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.querySelector("html").classList.add("dark");
}
