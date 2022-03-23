import $ from "jquery";

$(window).load(function () {
  $("body").removeClass("preload");
});

(function initTheme() {
  var theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();
// import { useState, useLayoutEffect } from "react";

// const [darkMode, setDarkMode] = useState(false);
// useLayoutEffect(() => {
//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     setDarkMode(true);
//     document.querySelector("html")?.classList.add("dark");
//   } else {
//     setDarkMode(false);
//     document.querySelector("html")?.classList.remove("dark");
//   }
// }, [darkMode]);
