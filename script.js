import { theme1, theme2, theme3, theme4, theme5 } from "./themes.js";

function toggleDarkLight(theme) {
  let bgColor, textColor;

  switch (theme) {
    case "light":
      bgColor = "#ffffff";
      textColor = "#24292e";
      break;

    case "dark":
      bgColor = "#0d1117";
      textColor = "#ffffff";
      break;

    default:
      bgColor = "#ffffff";
      textColor = "#24292e";
      break;
  }

  document
    .querySelector("html")
    .style.setProperty("--background_color", bgColor);
  document.querySelector("html").style.setProperty("--text_color", textColor);
}

window.addEventListener("load", () => {
  document
    .querySelector(".theme-light")
    .addEventListener("click", () => toggleDarkLight("light"));
  document
    .querySelector(".theme-dark")
    .addEventListener("click", () => toggleDarkLight("dark"));
});
