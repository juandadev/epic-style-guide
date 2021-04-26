import { theme1, theme2, theme3, theme4, theme5 } from "./themes.js";

const disabledButtons = document.getElementsByClassName("buttons--disabled");
const disabledInputs = document.getElementsByClassName("inputs--disabled");

function toggleDarkLight(theme) {
  let bgColor, textColor, dividerColor, alpha;

  switch (theme) {
    case "light":
      bgColor = "#ffffff";
      textColor = "#24292e";
      dividerColor = "#37a397";
      alpha = 1;
      break;

    case "dark":
      bgColor = "#0d1117";
      textColor = "#ffffff";
      dividerColor = "#ffffff";
      alpha = 0.5;
      break;

    default:
      bgColor = "#ffffff";
      textColor = "#24292e";
      dividerColor = "#37a397";
      alpha = 1;
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

  document
    .querySelector(".theme-light")
    .addEventListener("click", () => toggleDarkLight("light"));
  document
    .querySelector(".theme-dark")
    .addEventListener("click", () => toggleDarkLight("dark"));

  Array(disabledButtons).forEach((item) =>
    item[0].addEventListener("click", (e) => e.preventDefault)
  );

  Array(disabledInputs).forEach((item) =>
    item[0].addEventListener("click", (e) => (e.target.disabled = true))
  );
});
