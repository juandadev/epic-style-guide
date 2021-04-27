import { theme1, theme2, theme3, theme4, theme5 } from "./themes.js";

const themeBar = document.querySelector(".themes");
const themeBarOffset = themeBar.offsetTop;
const hamburger = document.querySelector(".themes__hamburger");

const badges = document.getElementsByClassName("badge") || [];
const alerts = document.getElementsByClassName("alert") || [];
const tooltips = document.getElementsByClassName("tooltip") || [];

function toggleDarkLight(theme) {
  let bgColor, textColor, dividerColor, alpha;

  switch (theme) {
    case "light":
      bgColor = "#f9f9f9";
      textColor = "#24292e";
      alpha = 1;

      Array(...badges).forEach((item) => item.classList.remove("dark"));
      Array(...alerts).forEach((item) => item.classList.remove("dark"));
      Array(...tooltips).forEach((item) => item.classList.remove("dark"));
      break;

    case "dark":
      bgColor = "#0d1117";
      textColor = "#f9f9f9";
      alpha = 0.5;

      Array(...badges).forEach((item) => item.classList.add("dark"));
      Array(...alerts).forEach((item) => item.classList.add("dark"));
      Array(...tooltips).forEach((item) => item.classList.add("dark"));
      break;

    default:
      bgColor = "#f9f9f9";
      textColor = "#24292e";
      alpha = 1;

      Array(...badges).forEach((item) => item.classList.remove("dark"));
      Array(...alerts).forEach((item) => item.classList.remove("dark"));
      Array(...tooltips).forEach((item) => item.classList.remove("dark"));
      break;
  }

  document
    .querySelector("html")
    .style.setProperty("--background_color", bgColor);
  document.querySelector("html").style.setProperty("--text_color", textColor);
  document
    .querySelector("html")
    .style.setProperty("--divider_color", dividerColor);
  document.querySelector("html").style.setProperty("--alpha", alpha);
}

function switchTheme(theme) {
  for (let i = 0; i < theme.length; i++) {
    document
      .querySelector("html")
      .style.setProperty(`--${theme[i][0]}`, theme[i][1]);
  }
}

function stickThemes() {
  if (window.pageYOffset >= themeBarOffset) {
    themeBar.classList.add("sticky");
  } else {
    themeBar.classList.remove("sticky");
  }
}

window.addEventListener("load", () => {
  document
    .querySelector(".themes__item.theme1")
    .addEventListener("click", () => switchTheme(theme1));
  document
    .querySelector(".themes__item.theme2")
    .addEventListener("click", () => switchTheme(theme2));
  document
    .querySelector(".themes__item.theme3")
    .addEventListener("click", () => switchTheme(theme3));
  document
    .querySelector(".themes__item.theme4")
    .addEventListener("click", () => switchTheme(theme4));
  document
    .querySelector(".themes__item.theme5")
    .addEventListener("click", () => switchTheme(theme5));
  document.querySelector(".toggle-theme").addEventListener("change", (e) => {
    if (e.target.checked) {
      toggleDarkLight("dark");
    } else {
      toggleDarkLight("light");
    }
  });
  hamburger.addEventListener("click", () => {
    document.querySelector(".themes__collapse").classList.toggle("show");
  });
});

window.onscroll = function () {
  stickThemes();
};
