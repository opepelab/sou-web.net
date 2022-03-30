(function () {
  let x = window.localStorage.getItem("theme");
  if (x !== null) {
    x;
  } else {
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.documentElement.setAttribute("data-theme", x);
})();

(function () {
  const x = window.localStorage.getItem("theme");
  if (x !== null) {
    x;
  } else {
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", x);
})();
