import $ from "jquery";

$(window).load(function () {
  $("body").removeClass("preload");
});

// (function initTheme() {
//   var theme = localStorage.getItem("theme");
//   if (theme === "dark") {
//     document.querySelector("html").classList.add("dark");
//   }
// })();
import { useLayoutEffect } from "react";

useLayoutEffect(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)"))
  ) {
    document.querySelector("html")?.classList.add("dark");
  } else {
    document.querySelector("html")?.classList.remove("dark");
  }
});
